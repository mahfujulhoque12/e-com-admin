import Loading from "@/app/loading";
import { useGetCommissionTableQuery } from "@/redux/feature/api/product-list/CommissionTableApi";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";

const CommissionTable = () => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetCommissionTableQuery();
  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(products.map((simple) => simple.id));
    }
  };

  // table dropdown
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

  const handleRowSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  // table dropdown
  const isAllSelected =
    products.length > 0 && selectedIds.length === products.length;

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  if (isLoading) return <Loading />;
  if (isError) {
    console.error("Error fetching products:", error);
    return <p>Error fetching products.</p>;
  }
  return (
    <div className="w-full overflow-x-auto bg-background   rounded-md mt-8">
      <table className="min-w-full bg-background ">
        <thead className=" bg-background ">
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
              SKU
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Stock
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              price
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Quantity
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Category
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Status
            </th>
            <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-background ">
          {products.map((product) => (
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
                {product.sku}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                <span
                  className={`px-2 inline-flex text-sm font-medium gap-2 items-center leading-5  rounded-md py-1 ${
                    product.stock === "In Stock"
                      ? "border border-[#A8EACC] bg-[#EFFFF2] text-[#12B76A]"
                      : product.stock === "Low Inventory"
                      ? "border border-[#E5C492] bg-[#FFF2DE] text-[#FE9900]"
                      : product.stock === "Out of Stock"
                      ? "border border-[#EDCCD2] bg-[#FFEEF1] text-[#FF2147]"
                      : "border border-[#6365EF] bg-[#E8E8FF] text-[#6365EF]"
                  }`}
                >
                  {product.stock}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                {product.category}
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
                    <div className="absolute left-0 top-16 bg-white shadow-md px-4 py-2 rounded-md  transition-all duration-300 ease-in-out">
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

export default CommissionTable;
