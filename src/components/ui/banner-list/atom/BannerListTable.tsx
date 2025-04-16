import Loading from "@/app/loading";

import { useGetBannerListQuery } from "@/redux/feature/api/banner-list/BannerListApi";
import { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";

export const getImageName = (bannerImg: string | StaticImageData): string => {
  if (typeof bannerImg === "string") {
    return bannerImg.split("/").pop() || "Unknown";
  } else {
    return bannerImg.src.split("/").pop() || "Unknown";
  }
};

const BannerListTable = () => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const {
    data: product = [],
    isLoading,
    isError,
    error,
  } = useGetBannerListQuery();

  // table Dropdown

  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = Object.values(dropdownRefs.current).every((ref) => {
      return ref && !ref.contains(event.target as Node);
    });

    if (isOutside) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // table Dropdown
  // checkbox selection
  const isAllSelected =
    product.length > 0 && selectedIds.length === product.length;

  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(product.map((simple) => simple.id));
    }
  };
  const handleRowSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  // checkbox selection

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  if (isLoading) return <Loading />;
  if (isError) {
    console.error("Error fetching products:", error);
    return <p>Error fetching products.</p>;
  }
  return (
    <div className="w-full overflow-x-auto bg-background rounded-md mt-8">
      <table className="min-w-full bg-background">
        <thead className="bg-background ">
          <tr>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              <input
                type="checkbox"
                className="rounded"
                checked={isAllSelected}
                onChange={handleAllSelect}
              />
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Banner{"\u00A0"}Id
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Title
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Images
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Start Date
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              End Date
            </th>

            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Payment Status
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {product.map((product) => (
            <tr
              key={product.id}
              className={
                product.id % 2 === 0
                  ? "bg-[#F9FAFB] dark:bg-[#111827]"
                  : "bg-white dark:bg-[#1e293b]"
              }
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="rounded"
                  checked={selectedIds.includes(product.id)}
                  onChange={() => handleRowSelect(product.id)}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.paymentId}
              </td>
              <td className="px-6 py-4  whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.title}
              </td>

              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#0070FF] underline">
                {getImageName(product.bannerImg)}
              </td>
              <td className="px-6   py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.startDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.date}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-sm font-medium gap-2 items-center leading-5  rounded-md py-1 ${
                    product.status === "Pending"
                      ? "border border-[#FE9900] text-[#FE9900]"
                      : product.status === "On the way"
                      ? "border border-[#99DCFF] text-[#00A6FF]"
                      : product.status === "Delivered"
                      ? "border border-[#12B76A] text-[#12B76A]"
                      : product.status === "Cancelled"
                      ? "border border-[#FF2147] text-[#FF2147]"
                      : "border border-[#6365EF] text-[#6365EF]"
                  }`}
                >
                  <GoDotFill /> {product.status}
                </span>
              </td>

              <td className="px-6 py-4  relative whitespace-nowrap text-sm font-medium ">
                <div
                  ref={(ref) => {
                    dropdownRefs.current[product.id] = ref;
                  }}
                >
                  <button
                    onClick={() => toggleDropdown(product.id)}
                    className="cursor-pointer text-[#1C274C] dark:text-gray-300"
                  >
                    <HiDotsVertical size={20} />
                  </button>
                  {openDropdown === product.id && (
                    <div className="absolute left-2 top-16 bg-white shadow-md px-4 py-2 rounded-md  transition-all duration-300 ease-in-out">
                      <button className="text-indigo-600 cursor-pointer hover:text-indigo-900 mr-4">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-900 cursor-pointer">
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BannerListTable;
