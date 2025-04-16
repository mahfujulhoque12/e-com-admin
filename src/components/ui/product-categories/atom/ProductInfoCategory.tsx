import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";

import Image from "next/image";
import { useGetPCategoryTableQuery } from "@/redux/feature/api/p-category/PCategoryApi";
import Loading from "@/app/loading";

const ProductInfoCategory = () => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const {
    data: product = [],
    isLoading,
    isError,
    error,
  } = useGetPCategoryTableQuery();
  const isAllSelected =
    product.length > 0 && selectedIds.length === product.length;

  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(product.map((data) => data.id));
    }
  };

  const handleRowSelect = (id: number) => {
    setSelectedIds((perv) =>
      perv.includes(id) ? perv.filter((item) => item !== id) : [...perv, id]
    );
  };
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

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  if (isLoading) return <Loading />;
  if (isError) {
    console.error("Error fetching products:", error);
    return <p>Error fetching products.</p>;
  }
  return (
    <div className="mt-5 bg-primary p-5 rounded-md shadow-md">
      <h2 className="text-color text-xl font-semibold">Category Info</h2>
      <div className="w-full overflow-x-auto  p-5 shadow-md rounded-md mt-5">
        <table className="min-w-full">
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
                Product{"\u00A0"}Name
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                Slug
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                Total{"\u00A0"}Sub{"\u00A0"}Category
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                Status
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary">
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
                <td className="px-6 py-4 flex items-center gap-2 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt="img"
                    className="h-[50px] w-[50px]"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                  {product.slug}
                </td>
                <td className="px-6 py-4 whitespace-nowrapont-medium text-sm text-[#455468] dark:text-gray-300">
                  {product.totalSubCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-sm font-medium gap-2 items-center leading-5  rounded-md py-1 ${
                      product.status === "Pending"
                        ? "border border-[#FE9900] text-[#FE9900]"
                        : product.status === "Delivered"
                        ? "border border-[#12B76A] text-[#12B76A]"
                        : product.status === "Cancelled"
                        ? "border border-[#FF2147] text-[#FF2147]"
                        : "border border-[#6365EF] text-[#6365EF]" // In Progress
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
                      <div className="absolute left-12 top-6 bg-white shadow-md px-4 py-2 rounded-md  transition-all duration-300 ease-in-out">
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
      <h3 className="text-center mt-5 text-color text-base font-medium">
        Copyright 2025 © Onekart theme by softwareinnovations
      </h3>
    </div>
  );
};

export default ProductInfoCategory;
