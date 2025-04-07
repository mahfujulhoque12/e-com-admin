import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import ResuableInput from "../../product-upload/atom/ResuableInput";
import MultipleFileUpload from "../../product-upload/atom/MultipuleFileUpload";
import {
  MediaFormData,
  setMediaFormData,
} from "@/redux/feature/product-upload/media/mediaSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/redux-store/store";
import ResuableDropdownMenu from "../../product-upload/atom/ResuableDropdownMenu";
import { CategoryEnum } from "@/types/ProductFormTypes";
import { NewSubCategoryType } from "@/types/CategoryTyes";

const NewSubCategory = () => {
  const mediaFormData = useSelector((state: RootState) => state.media);
  const multipleFilesRef = useRef<File[]>([]);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<NewSubCategoryType>();

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

  // Register the category field manually
  register("selectParent", {
    required: "Select Parent is required",
  });

  const onSubmit = (data: NewSubCategoryType) => {
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
    <div className="mt-5 bg-white rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-[#0A0E1F]">New Category</h1>
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
        <div className="w-full mt-4">
          <ResuableDropdownMenu
            name="selectParent"
            label="Select Parent"
            options={Object.values(CategoryEnum)}
            errorMessage={errors.selectParent?.message}
            onSelect={(value) => {
              setValue("selectParent", value, {
                shouldValidate: true,
                shouldTouch: true,
                shouldDirty: true,
              });
            }}
          />
        </div>
        {/* Image Field */}
        <h3 className="text-base font-semibold text-[#0A0E1F] mt-3">
          Upload Image
        </h3>
        <div className="w-full md:w-1/2 mt-0  dark:bg-darkButtonBg rounded-md bg-[#F9FBFC] ">
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
            className="px-4 py-2 text-sm font-medium text-gray-700  border border-gray-300  rounded-md  hover:bg-red-400 hover:text-white transition-all duration-300"
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

export default NewSubCategory;
