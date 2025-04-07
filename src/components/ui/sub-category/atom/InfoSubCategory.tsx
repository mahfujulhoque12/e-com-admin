import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import img from "/public/product/product.png";
import Image, { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: "Pending" | "Delivered" | "Cancelled" | "In Progress";
}
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    img: img,
    slug: "smartphone",
    totalSubCategory: 5,
    status: "Pending",
  },
  {
    id: 2,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "Delivered",
  },
  {
    id: 3,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "In Progress",
  },
  {
    id: 4,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "Cancelled",
  },
];
const InfoSubCategory = () => {
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="mt-5 bg-white p-5 rounded-md shadow-md">
      <h2 className="text-[#0A0E1F] text-xl font-semibold">Subcategory Info</h2>
      <div className="w-full overflow-x-auto  p-5 shadow-md rounded-md mt-5">
        <table className="min-w-full">
          <thead className="bg-[#F9FAFB] ">
            <tr>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                Subcategory
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                Slug
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                Total{"\u00A0"}Products
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                Status
              </th>
              <th className="px-6 py-5 text-left text-base font-semibold text-[#455468]  tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {sampleProducts.map((product) => (
              <tr
                key={product.id}
                className={product.id % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-6 py-4 flex items-center gap-2 whitespace-nowrap font-medium text-sm text-[#455468]">
                  <Image
                    src={product.img}
                    width={100}
                    height={100}
                    alt="img"
                    className="h-[50px] w-[50px]"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468]">
                  {product.slug}
                </td>
                <td className="px-6 py-4 whitespace-nowrapont-medium text-sm text-[#455468]">
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
                  <button
                    onClick={() => toggleDropdown(product.id)}
                    className="cursor-pointer"
                  >
                    <HiDotsVertical color="#1C274C" size={20} />
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="text-center mt-5 text-[#333B4E] text-base font-medium">
        Copyright 2025 © Onekart theme by softwareinnovations
      </h3>
    </div>
  );
};

export default InfoSubCategory;
