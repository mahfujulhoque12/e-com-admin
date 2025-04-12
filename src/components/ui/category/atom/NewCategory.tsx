import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import {
  MediaFormData,
  setMediaFormData,
} from "@/redux/feature/product-upload/media/mediaSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/redux-store/store";
import { NewCategoryType } from "@/types/CategoryTyes";
import ResuableInput from "../../products/product-upload/atom/ResuableInput";
import MultipleFileUpload from "../../products/product-upload/atom/MultipuleFileUpload";

const NewCategory = () => {
  const mediaFormData = useSelector((state: RootState) => state.media);
  const multipleFilesRef = useRef<File[]>([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategoryType>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (field: keyof MediaFormData, value: any) => {
    if (field === "multipuleFile") {
      multipleFilesRef.current = value; // Store the actual files in ref
      dispatch(
        setMediaFormData({
          multipuleFile: value.map((file: File) => ({
            name: file.name,
            size: file.size,
            type: file.type,
          })),
        })
      );
    } else {
      dispatch(setMediaFormData({ [field]: value }));
    }
  };

  const onSubmit = (data: NewCategoryType) => {
    // Include file details in the log
    const uploadedFiles = multipleFilesRef.current.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    console.log({
      ...data,
      uploadedFiles,
    });
  };

  return (
    <div className="mt-5 bg-primary rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-color">New Category</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <ResuableInput
              label="Category Name"
              name="categoryName"
              type="text"
              register={register}
              validation={{
                required: "Category Name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.categoryName?.message}
              placeholder="Category Name"
            />
          </div>
          <div className="w-full">
            <ResuableInput
              label="Slug"
              name="slug"
              type="text"
              register={register}
              validation={{
                required: "Slug is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.slug?.message}
              placeholder="Slug"
            />
          </div>
        </div>
        {/* Image Field */}
        <h3 className="text-base font-semibold text-color mt-3">
          Upload Image
        </h3>
        <div className="w-full md:w-1/2 mt-0  dark:bg-darkButtonBg rounded-md bg-primary ">
          <MultipleFileUpload
            attachments={mediaFormData.multipuleFile.map(
              (fileMeta) => new File([], fileMeta.name, { type: fileMeta.type })
            )}
            onFilesChange={(files) => handleInputChange("multipuleFile", files)}
            allowedFileTypes={["image/jpeg", "image/png", "image/webp"]}
            maxFiles={5}
            id="multiple-product"
            cardTitle="Gallery Images"
            cardTititleStyle="text-[#1E4D8A]"
            cardDes="Add images here and you can upload up to 5 files max"
          />
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

export default NewCategory;
