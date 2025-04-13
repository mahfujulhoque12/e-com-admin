import React from "react";
import { useForm } from "react-hook-form";

import { AdminReviewType } from "@/types/CategoryTyes";

import SelectAndSearch from "./atom/SelectAndSearch";
import {
  SelectCustomerEnum,
  SelectPrductEnum,
  SelectRatingEnum,
} from "@/types/OrderListType";
import ResuableInput from "../products/product-upload/atom/ResuableInput";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AdminReviewType>();

  const onSubmit = (data: AdminReviewType) => {
    console.log(data, "add review");
  };

  return (
    <div className="mt-5 bg-primary rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-color">Add A New Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <SelectAndSearch
              label="Select A Customers"
              name="customers" // Fixed typo from "prodcutType"
              options={Object.values(SelectCustomerEnum)}
              errorMessage={errors.customers?.message}
              onSelect={(value) => {
                setValue("customers", value as SelectCustomerEnum, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }}
              register={register("customers", {
                required: "customers  is required",
              })}
            />
          </div>
          <div className="w-full">
            <SelectAndSearch
              label="Select A Product"
              name="product" // Fixed typo from "prodcutType"
              options={Object.values(SelectPrductEnum)}
              errorMessage={errors.product?.message}
              onSelect={(value) => {
                setValue("product", value as SelectPrductEnum, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }}
              register={register("product", {
                required: "product  is required",
              })}
            />
          </div>
        </div>

        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <SelectAndSearch
              label="Select A Rating"
              name="rating" // Fixed typo from "prodcutType"
              options={Object.values(SelectRatingEnum)}
              errorMessage={errors.rating?.message}
              onSelect={(value) => {
                setValue("rating", value as SelectRatingEnum, {
                  shouldValidate: true,
                  shouldDirty: true,
                  shouldTouch: true,
                });
              }}
              register={register("rating", {
                required: "rating  is required",
              })}
            />
          </div>
          <div className="w-full">
            <ResuableInput
              label="Review"
              name="review"
              type="text"
              register={register}
              validation={{
                required: "review is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.review?.message}
              placeholder="review"
            />
          </div>
        </div>
        {/* Image Field */}
        <div className="mt-6 flex justify-end items-center gap-3">
          {/* Cancel button */}
          <button
            type="reset"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-color  border border-gray-300  rounded-md  hover:bg-red-400 hover:text-white transition-all duration-300"
          >
            Cancel
          </button>

          {/* Save button */}
          <button
            type="submit"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
