"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { AddGroupType } from "@/types/CategoryTyes";
import ResuableInput from "../products/product-upload/atom/ResuableInput";

const AddGroup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<AddGroupType>();

  const onSubmit = (data: AddGroupType) => {
    console.log(data);
  };

  return (
    <div className="mt-5 bg-primary rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-color">Add Customer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <ResuableInput
              label="Group name"
              name="groupName"
              type="text"
              register={register}
              validation={{
                required: "Group Name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.groupName?.message}
              placeholder="Group Name"
            />
          </div>
          <div className="w-full">
            <ResuableInput
              label="Group Color"
              name="groupColor"
              type="text"
              register={register}
              validation={{
                required: "group Color Type is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.groupColor?.message}
              placeholder="Group Color"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <ResuableInput
              label="Group Description"
              name="groupDes"
              type="text"
              register={register}
              validation={{
                required: "Group Description is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.groupDes?.message}
              placeholder="Group Description"
            />
          </div>
        </div>

        {/* Image Field */}
        <div className="mt-6 flex justify-end items-center gap-3">
          {/* Cancel button */}
          <button
            type="reset"
            className="px-4 py-2 text-sm font-medium text-color  border border-gray-300  rounded-md  hover:bg-red-400 hover:text-white transition-all duration-300"
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

export default AddGroup;
