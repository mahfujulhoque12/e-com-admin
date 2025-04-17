"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchAndFilter from "./atom/SearchAndFilter";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";

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
import ProductsTable from "./atom/ProductsTable";

export const initialFilters = ["Category", `Flight\u00A0Schedule`, "Airlines"];

const ProductsListWrapper = () => {
  const [activeFilters, setActiveFilters] = useState(initialFilters);
  const [selected, setSelected] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const calendarRef = useRef<HTMLDivElement>(null);

  // checkbox selection

  // table dropdown

  // checkbox selection

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
        <ProductsTable/>

       
      </div>
    </div>
  );
};

export default ProductsListWrapper;
