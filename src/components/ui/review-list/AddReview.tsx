import React from "react";
import { useForm } from "react-hook-form";

import { AdminReviewType } from "@/types/CategoryTyes";

import SelectAndSearch from "./atom/SelectAndSearch";

import ResuableInput from "../products/product-upload/atom/ResuableInput";
import {
  setSelectedCustomer,
  setSelectedProduct,
  setSelectedRating,
} from "@/redux/feature/customer/CustomerSelectionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useGetCustomersQuery } from "@/redux/feature/api/customer-api/CustomerApi";
import { useGetProductsQuery } from "@/redux/feature/api/customer-api/ProductAPi";
import { useGetRatingQuery } from "@/redux/feature/api/customer-api/RatingApi";

const AddReview = () => {
  const dispatch = useAppDispatch();
  const selectedCustomer = useAppSelector(
    (state) => state.customerSelection.selectedCustomer
  );
  const selectedProduct = useAppSelector(
    (state) => state.customerSelection.selectedProduct
  );
  const selectedRating = useAppSelector(
    (state) => state.customerSelection.selectedRating
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AdminReviewType>();

  const onSubmit = (data: AdminReviewType) => {
    console.log(data, "add review");
  };
  const { data: customers = [], isLoading } = useGetCustomersQuery("");
  const { data: products = [] } = useGetProductsQuery("");
  const { data: ratings = [] } = useGetRatingQuery("");

  return (
    <div className="mt-5 bg-primary rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-color">Add A New Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <SelectAndSearch
              label="Select Customer"
              name="customers"
              value={selectedCustomer}
              options={customers}
              isLoading={isLoading}
              onSelect={(val) => {
                dispatch(setSelectedCustomer(val));
                setValue("customers", val, { shouldValidate: true });
              }}
              errorMessage={errors.customers?.message}
              register={register("customers", {
                required: "Customer is required",
              })}
            />
          </div>
          <div className="w-full">
            <SelectAndSearch
              label="Select A Product"
              name="product" // Fixed typo from "prodcutType"
              options={products}
              value={selectedProduct}
              errorMessage={errors.product?.message}
              isLoading={isLoading}
              onSelect={(value) => {
                dispatch(setSelectedProduct(value));
                setValue("product", value, {
                  shouldValidate: true,
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
              name="ratings"
              value={selectedRating}
              errorMessage={errors.ratings?.message}
              options={ratings}
              isLoading={isLoading}
              onSelect={(value) => {
                dispatch(setSelectedRating(value));
                setValue("ratings", value, {
                  shouldValidate: true,
                });
              }}
              register={register("ratings", {
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
