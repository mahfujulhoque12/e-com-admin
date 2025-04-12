"use client";

import { FieldErrors, useForm } from "react-hook-form";

import Image from "next/image";
import qr from "/public/productUpload/qr.png";
import bey from "/public/productUpload/bey.png";

import React, { useState } from "react";

import { FaPlus, FaTrash } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/redux-store/store";
import {
  // setFormData,
  addSpecification,
  // updateSpecification,
  removeSpecification,
  resetForm,
} from "@/redux/feature/product-upload/product-details/productDetailsSlice";

import {
  Brands,
  CategoryEnum,
  Inputs,
  MeasurementEnum,
  StockUnitEnum,
  SubCategoryEnum,
  WarrentyUnitEnum,
} from "@/types/ProductFormTypes";
import ResuableInput from "./atom/ResuableInput";
import ResuableDropdownMenu from "./atom/ResuableDropdownMenu";

import CustomTextArea from "./atom/CustomTextarea";
import Switch from "./atom/Switch";

const ProductDetailsForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.productDetails);

  // const handleInputChange = (field: keyof typeof formData, value: string) => {
  //   dispatch(setFormData({ [field]: value }));
  // };

  const [isChecked, setIsChecked] = useState(false);
  // Inside your component

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      category: undefined,
      subCategory: undefined,
      brands: undefined,
      description: "",
      price: "",
      salePrice: "",
      length: "",
    },
    mode: "onSubmit",
  });

  // Register the category field manually
  register("category", {
    required: "Category is required",
  });

  // Register the subCategory field manually
  register("subCategory", {
    required: "Subcategory is required",
  });
  // Register the brands field manually
  register("brands", {
    required: "Brands is required",
  });

  // register measurement fields manually
  register("measurement", {
    required: "Measurement is required",
  });
  // register stockUnit field manually
  register("stockUnit", {
    required: "Stock Unit is required",
  });
  // register warrentyUnit field manually
  register("warrentyUnit", {
    required: "Warrenty Unit is required",
  });

  // register manufacturer field manually
  register("manufacturer", {
    required: "manufacturer Unit is required",
  });

  // register madeIn field manually
  register("madeIn", {
    required: "Made In One is required",
  });

  const onSubmit = (data: Inputs) => {
    console.log(data, "react-hook-form data get");
  };

  const onError = (errors: FieldErrors<Inputs>) => {
    console.log(errors, "form errors");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="shadow-md mt-5 lg:mt-0 p-5 bg-primary rounded-md  ">
          <h1 className="text-color text-xl font-semibold ">
            Product Information
          </h1>
          {/* frist col start */}
          <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
            {/* First Name Field */}
            <div className="w-full">
              <ResuableInput
                label="First Name"
                name="firstName"
                type="text"
                register={register}
                validation={{
                  required: "First Name is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.firstName?.message}
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <ResuableDropdownMenu
                name="category"
                label="Category"
                options={Object.values(CategoryEnum)}
                errorMessage={errors.category?.message}
                onSelect={(value) => {
                  setValue("category", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
          </div>
          {/* frist col end */}
          {/* sec col start */}
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <ResuableDropdownMenu
                name="subCategory"
                label="Sub Category"
                options={Object.values(SubCategoryEnum)}
                errorMessage={errors.subCategory?.message}
                onSelect={(value) => {
                  setValue("subCategory", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
            <div className="w-full">
              <ResuableDropdownMenu
                name="brands"
                label="Brands"
                options={Object.values(Brands)}
                errorMessage={errors.brands?.message}
                onSelect={(value) => {
                  setValue("brands", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
          </div>
          {/* sec col end */}
          {/* made in start */}
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <ResuableDropdownMenu
                name="manufacturer"
                label="Manufacturer"
                options={Object.values(SubCategoryEnum)}
                errorMessage={errors.manufacturer?.message}
                onSelect={(value) => {
                  setValue("manufacturer", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
            <div className="w-full">
              <ResuableDropdownMenu
                name="madeIn"
                label="Made In"
                options={Object.values(Brands)}
                errorMessage={errors.madeIn?.message}
                onSelect={(value) => {
                  setValue("madeIn", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
          </div>
          {/* made in end */}

          {/* text area start */}
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <CustomTextArea
                label="Short Description"
                name="description"
                control={control}
                rules={{
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Must be at least 10 characters.",
                  },
                }}
                placeholder="Write something here..."
              />
            </div>
          </div>
          {/* text area end */}
        </div>
        {/* price start */}
        <div className="shadow-md bg-primary rounded-md   mt-6 p-5 ">
          <h1 className="text-color text-xl font-semibold ">Price</h1>
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <ResuableInput
                label="Price"
                name="price"
                type="text"
                register={register}
                validation={{
                  required: "Price is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.price?.message}
                placeholder="Price"
              />
            </div>
            <div className="w-full">
              <ResuableInput
                label="Sale Price"
                name="salePrice"
                type="text"
                register={register}
                validation={{
                  required: "Sale Price is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.salePrice?.message}
                placeholder="Sale Price"
              />
            </div>
          </div>
        </div>
        {/* price end */}
        {/* Dimension start */}
        <div className="shadow-md rounded-md bg-primary  mt-6 p-5 dark:bg-darkbuttonBg">
          <div className="flex items-center gap-4">
            <h1 className="text-color text-xl font-semibold ">Dimension</h1>
            <Switch
              isChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <div
            className={`transition-all duration-300 ${
              !isChecked ? "blur-sm pointer-events-none opacity-100" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="Length"
                  name="length"
                  type="text"
                  register={register}
                  validation={{
                    required: "length is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.length?.message}
                  placeholder="85210"
                />
              </div>
              <div className="w-full">
                <ResuableInput
                  label="Width"
                  name="width"
                  type="text"
                  register={register}
                  validation={{
                    required: "width is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.width?.message}
                  placeholder="1010"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="Depth"
                  name="depth"
                  type="text"
                  register={register}
                  validation={{
                    required: "depth is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.width?.message}
                  placeholder="8571"
                />
              </div>
              <div className="w-full">
                <ResuableDropdownMenu
                  name="measurement"
                  label="Measurement"
                  options={Object.values(MeasurementEnum)}
                  errorMessage={errors.measurement?.message}
                  onSelect={(value) => {
                    setValue("measurement", value, {
                      shouldValidate: true,
                      shouldTouch: true,
                      shouldDirty: true,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Dimension end */}
        {/* stock start */}
        <div className="shadow-md rounded-md bg-primary  mt-6 p-5 dark:bg-darkbuttonBg">
          <h1 className="text-color text-xl font-semibold ">Stock</h1>
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <ResuableInput
                label="Total Stock"
                name="totalStock"
                type="text"
                register={register}
                validation={{
                  required: "total Stock is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.totalStock?.message}
                placeholder="total Stock"
              />
            </div>
            <div className="w-full">
              <ResuableDropdownMenu
                name="stockUnit"
                label="Stock Unit"
                options={Object.values(StockUnitEnum)}
                errorMessage={errors.stockUnit?.message}
                onSelect={(value) => {
                  setValue("stockUnit", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
          </div>
        </div>
        {/* stock end */}
        {/* Identifier start */}
        <div className="shadow-md rounded-md bg-primary  mt-6 p-5 dark:bg-darkbuttonBg">
          <h1 className="text-color text-xl font-semibold ">Identifier</h1>
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="w-full">
              <ResuableInput
                label="Product Sku"
                name="productSku"
                type="text"
                register={register}
                validation={{
                  required: "product Sku Stock is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.productSku?.message}
                placeholder="Product Sku"
              />
            </div>
            <div className="w-full">
              <ResuableInput
                label="QR Code"
                name="qrCode"
                type="text"
                register={register}
                validation={{
                  required: "OR is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.qrCode?.message}
                placeholder="QR"
              />
            </div>
          </div>
          {/* qr code start */}
          <div className="mt-5 shadow-md bg-primary rounded-md  p-5 flex justify-between dark:bg-darkPrimaryBg">
            <div>
              <span className="text-[#525252] dark:text-gray-300 font-normal text-base ">
                QR Code
              </span>
              <Image
                src={qr}
                alt="qr code"
                width={400}
                height={400}
                className="w-[145px] h-[145px] mt-3"
              />
            </div>
            <div>
              <button className="bg-[#257CEB] text-sm font-normal text-white px-3 py-2 rounded-md shadow-md">
                Download PNG
              </button>
            </div>
          </div>
        </div>
        {/* qr code end */}
        {/* bey start */}
        <div className="mt-5 shadow-md bg-primary rounded-md  p-5 flex flex-col sm:flex-row gap-5 justify-between dark:bg-darkPrimaryBg">
          <div>
            <span className="text-[#525252] dark:text-gray-300 font-normal text-base ">
              Bae Code
            </span>
            <Image
              src={bey}
              alt="qr code"
              width={400}
              height={400}
              className="w-[233px] h-[80px] max-w-[233px] max-h-[80px] mt-3"
            />
          </div>
          <div>
            <button className="bg-[#257CEB] text-sm font-normal text-white px-3 py-2 rounded-md shadow-md">
              Download PNG ff
            </button>
          </div>
        </div>
        {/* bey end */}
        {/* Identifier end */}
        {/* Warrenty start */}
        <div className="shadow-md bg-primary rounded-md   mt-6 p-5 dark:bg-darkbuttonBg">
          <h1 className="text-color text-xl font-semibold ">Warrenty</h1>
          <div className="flex items-center gap-5 my-5">
            <div className="flex items-center gap-2">
              <input
                id="yes-radio"
                name="option"
                type="radio"
                className="h-4 w-4"
              />
              <label
                htmlFor="yes-radio"
                className="text-base font-normal text-[#7C7C7C] dark:text-gray-300 "
              >
                Yes
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="no-radio"
                name="option"
                type="radio"
                className="h-4 w-4"
              />
              <label
                htmlFor="no-radio"
                className="text-base font-normal text-[#7C7C7C] dark:text-gray-300 "
              >
                No
              </label>
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <div className="w-full">
              <ResuableInput
                label="Wareenty Period"
                name="wareentyPeriod"
                type="text"
                register={register}
                validation={{
                  required: "Warrenty is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                }}
                error={errors.wareentyPeriod?.message}
                placeholder="Wareenty Period"
              />
            </div>
            <div className="w-full">
              <ResuableDropdownMenu
                name="warrentyUnit"
                label="Warrenty Unit"
                options={Object.values(WarrentyUnitEnum)}
                errorMessage={errors.stockUnit?.message}
                onSelect={(value) => {
                  setValue("warrentyUnit", value, {
                    shouldValidate: true,
                    shouldTouch: true,
                    shouldDirty: true,
                  });
                }}
              />
            </div>
          </div>
          {/* --------------change of mind------------------ */}
          <div className="mt-6">
            <span className="text-[#7C7C7C] dark:text-gray-300 font-normal text-base ">
              Change of mind
            </span>
            <div className="flex items-center gap-5 mt-2">
              <div className="flex items-center gap-2">
                <input
                  id="yes-mind"
                  name="mind"
                  type="radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="yes-mind"
                  className="text-base font-normal text-[#7C7C7C] dark:text-gray-300 "
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="no-mind"
                  name="mind"
                  type="radio"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="no-mind"
                  className="text-base font-normal text-[#7C7C7C] dark:text-gray-300 "
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Warrenty end */}
        {/* Specifications start */}
        <div className="shadow-md rounded-md bg-primary  mt-6  p-5 dark:bg-darkbuttonBg">
          <h1 className="text-color text-xl font-semibold ">Specifications</h1>
          {formData.specifications.map((spec, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="Specifications Key"
                  name={`specificationsKey-${index}`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Specifications Key is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.specifications?.message}
                  placeholder="Specifications Key"
                />
              </div>
              <div className="w-full">
                <ResuableInput
                  label="Specifications Value "
                  name={`specificationsValue-${index}`}
                  type="text"
                  register={register}
                  validation={{
                    required: "Specifications Key is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.specifications?.message}
                  placeholder="Specifications Key"
                />
              </div>

              {formData.specifications.length > 1 && (
                <button
                  type="button"
                  onClick={() => dispatch(removeSpecification(index))}
                  className="px-4 py-2  text-sm font-medium text-white bg-red-600 hover:bg-red-800 transition-all duration-300 rounded-md shadow-md"
                >
                  Remove
                  <FaTrash size={18} />
                </button>
              )}
            </div>
          ))}

          <div className="mt-4 flex justify-end items-center ">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
              onClick={() => dispatch(addSpecification())}
            >
              Add Specifications <FaPlus />
            </button>
          </div>
        </div>
        {/* Specifications end */}
        <div className="my-6  mx-3 flex justify-end items-center gap-3">
          {/* Cancel button */}
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-color  border border-gray-300  rounded-md  hover:bg-red-400 hover:text-white transition-all duration-300"
            onClick={() => {
              dispatch(resetForm());
            }}
          >
            Cancel
          </button>

          {/* Save button */}
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductDetailsForm;
