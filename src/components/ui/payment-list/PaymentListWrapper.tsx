"use client";
import React, { useEffect, useRef, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import Image from "next/image";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import SearchAndFilter from "../products/atom/SearchAndFilter";
import ProductsDropdown from "../products/atom/ProductsDropdown";
import Pagination from "../products/atom/Pagianation";
import {
  AllOrdersEnum,
  CancelEnum,
  CompletedEnum,
  OrdersFormData,
} from "@/types/OrderListType";
import { ShippinEnum } from "@/types/VariationInput";

import { paymentListData } from "@/data/PaymentListData";
import { initialFilters } from "../products/ProductsListWrapper";

const PaymentListWrapper = () => {
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [selected, setSelected] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

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
    paymentListData.length > 0 && selectedIds.length === paymentListData.length;

  const handleAllSelect = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paymentListData.map((simple) => simple.id));
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
  } = useForm<OrdersFormData>({});

  const onSubmit = (data: OrdersFormData) => {
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
                  : "Pick a day."}
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
                label="All Orders"
                name="allOrders" // Fixed typo from "prodcutType"
                options={Object.values(AllOrdersEnum)}
                errorMessage={errors.allOrders?.message}
                onSelect={(value) => {
                  setValue("allOrders", value as AllOrdersEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("allOrders", {
                  required: "All Orders  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="Shipping(100)"
                name="shipping" // Fixed typo from "prodcutType"
                options={Object.values(ShippinEnum)}
                errorMessage={errors.shipping?.message}
                onSelect={(value) => {
                  setValue("shipping", value as ShippinEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("shipping", {
                  required: "shipping  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="Completed (300)"
                name="completed" // Fixed typo from "prodcutType"
                options={Object.values(CompletedEnum)}
                errorMessage={errors.completed?.message}
                onSelect={(value) => {
                  setValue("completed", value as CompletedEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("completed", {
                  required: "completed  is required",
                })}
              />
            </div>
            <div className="w-full">
              <ProductsDropdown
                label="Cancel (41)"
                name="cancel" // Fixed typo from "prodcutType"
                options={Object.values(CancelEnum)}
                errorMessage={errors.cancel?.message}
                onSelect={(value) => {
                  setValue("cancel", value as CancelEnum, {
                    shouldValidate: true,
                    shouldDirty: true,
                    shouldTouch: true,
                  });
                }}
                register={register("cancel", {
                  required: "cancel  is required",
                })}
              />
            </div>
          </div>
        </form>

        {/* options end  */}
        <div className="w-full overflow-x-auto  rounded-md mt-5 bg-background">
          <table className="min-w-full bg-background">
            <thead className="bg-background">
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
                  Payment{"\u00A0"}Id
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Payment{"\u00A0"}Method
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Date
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300  tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-background">
              {paymentListData.map((product) => (
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
                  <td className="px-6 py-4 flex items-center gap-2 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    <Image
                      src={product.img}
                      width={100}
                      height={100}
                      alt="img"
                      className="h-[30px] w-[30px] object-cover"
                    />
                    {product.paymentMethod}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.invoice}
                  </td>
                  <td className="px-6   py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    <span
                      className={`px-2 inline-flex text-sm font-medium gap-2 items-center leading-5  rounded-md py-1 ${
                        product.payment === "paid"
                          ? "border border-[#A8EACC] bg-[#EFFFF2] text-[#12B76A]"
                          : "border border-[#EDCCD2] bg-[#FFEEF1] text-[#FF2147]"
                      }`}
                    >
                      {product.payment}
                    </span>
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

export default PaymentListWrapper;
