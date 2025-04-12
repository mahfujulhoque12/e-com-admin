"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchAndFilter from "./atom/SearchAndFilter";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import Image from "next/image";
import { sampleProductList } from "@/data/productListData";
import Pagination from "./atom/Pagianation";
import ProductsDropdown from "./atom/ProductsDropdown";
import {
  BrandEnum,
  CategoryEnumList,
  ProductsFormData,
  StatusEnum,
  StockEnum,
} from "@/types/ProductsListType";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export const initialFilters = ["Category", `Flight\u00A0Schedule`, "Airlines"];

const ProductsListWrapper = () => {
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [selected, setSelected] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // checkbox selection
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const isAllSelected =
    sampleProductList.length > 0 &&
    selectedIds.length === sampleProductList.length;

  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(sampleProductList.map((simple) => simple.id));
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
  const removeFilter = (filterName: string) => {
    setActiveFilters((filters) => filters.filter((f) => f !== filterName));
  };

  const {
    register,

    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductsFormData>({});

  const onSubmit = (data: ProductsFormData) => {
    console.log("Submitted data:", data); // Log the entire form data
  };
  // Handle clicks outside the calendar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    // Add event listener when calendar is open
    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  return (
    <div className="bg-primary p-5 rounded-md mt-5 md:mt-0">
      <SearchAndFilter />

      <div className="mt-5 bg-primary shadow-md p-5">
        {/* filters section start */}
        <div className="flex items-center gap-2 w-full overflow-x-auto">
          {activeFilters.map((filter) => (
            <button
              key={filter}
              className="text-color flex items-center gap-2 bg-[#F9FBFC] dark:bg-gray-800 border border-[#E6EBEE] dark:border-gray-700 text-sm font-medium cursor-pointer px-3 py-2 rounded-md"
            >
              {filter}
              <IoMdClose
                className="cursor-pointer"
                onClick={() => removeFilter(filter)}
              />
            </button>
          ))}
        </div>
        {/* filters section end */}
        {/* options start  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 items-center gap-5 mt-5 ">
            <div className="border px-5 py-3 rounded-md bg-primary border-[#E6EBEE] dark:border-gray-700  w-full relative">
              {/* Toggle button/message */}
              <div
                onClick={() => setIsCalendarOpen(true)}
                className="cursor-pointer"
              >
                {selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day"}
              </div>

              {/* Calendar - only shows when isCalendarOpen is true */}
              {isCalendarOpen && (
                <div
                  ref={calendarRef}
                  className="absolute top-14 left-0 bg-primary p-3 shadow-md rounded-md z-10"
                >
                  <DayPicker
                    animate
                    mode="single"
                    selected={selected}
                    onSelect={(date) => {
                      setSelected(date);
                      setIsCalendarOpen(false); // Close calendar after selection
                    }}
                    footer={
                      selected
                        ? `Selected: ${selected.toLocaleDateString()}`
                        : "Pick a day."
                    }
                  />
                </div>
              )}
            </div>

            <div className="w-full">
              <ProductsDropdown
                label="Brand"
                placeholder="Please Select a"
                name="brand" // Fixed typo from "prodcutType"
                options={Object.values(BrandEnum)}
                errorMessage={errors.brand?.message}
                onSelect={(value) => {
                  setValue("brand", value as BrandEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("brand", {
                  required: "brand  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="Category"
                placeholder="Please Select a"
                name="category" // Fixed typo from "prodcutType"
                options={Object.values(CategoryEnumList)}
                errorMessage={errors.category?.message}
                onSelect={(value) => {
                  setValue("category", value as CategoryEnumList, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("category", {
                  required: "category  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="status"
                placeholder="Please Select a"
                name="status" // Fixed typo from "prodcutType"
                options={Object.values(StatusEnum)}
                errorMessage={errors.status?.message}
                onSelect={(value) => {
                  setValue("status", value as StatusEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("status", {
                  required: "status  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="stock"
                placeholder="Please Select a"
                name="stock" // Fixed typo from "prodcutType"
                options={Object.values(StockEnum)}
                errorMessage={errors.stock?.message}
                onSelect={(value) => {
                  setValue("stock", value as StockEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("stock", {
                  required: "stock  is required",
                })}
              />
            </div>
          </div>
        </form>

        {/* options end  */}
        <div className="w-full overflow-x-auto bg-background   rounded-md mt-5">
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
              {sampleProductList.map((product) => (
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex items-center justify-between flex-col md:flex-row">
          <p className="text-sm sm:text-base font-semibold text-[#455468] dark:text-gray-300">
            Displaying product entries up to 100{" "}
          </p>

          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListWrapper;
