import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import {
  MediaFormData,
  setMediaFormData,
} from "@/redux/feature/product-upload/media/mediaSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/redux-store/store";

import { VendorAddType } from "@/types/CategoryTyes";
import ResuableInput from "../products/product-upload/atom/ResuableInput";

import SingleFileUpload from "../products/product-upload/atom/SingleFileUpload";

const AddBrand = () => {
  const mediaFormData = useSelector((state: RootState) => state.media);
  const attachmentRef = useRef<File | null>(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<VendorAddType>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (field: keyof MediaFormData, value: any) => {
    if (field === "attachment" && value instanceof File) {
      attachmentRef.current = value; // Store the actual file in ref
      dispatch(
        setMediaFormData({
          attachment: { name: value.name, size: value.size, type: value.type },
        })
      );
    } else {
      dispatch(setMediaFormData({ [field]: value }));
    }
  };

  const onSubmit = (data: VendorAddType) => {
    // Include file details in the log
    const uploadedFile = attachmentRef.current;

    console.log("add brand", {
      ...data,
      uploadedFile,
    });
  };

  return (
    <div className="mt-5 bg-primary rounded-md shadow-md p-5">
      <h1 className="text-xl font-semibold text-color">Add Brand</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <ResuableInput
              label="Brand name"
              name="brandName"
              type="text"
              register={register}
              validation={{
                required: "brand Name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.brandName?.message}
              placeholder="Brand Name"
            />
          </div>
          <div className="w-full">
            <ResuableInput
              label="Brand Type"
              name="brandType"
              type="text"
              register={register}
              validation={{
                required: "Brand Type is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.brandType?.message}
              placeholder="Brand Type"
            />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-3 mt-5">
          {/* First Name Field */}
          <div className="w-full">
            <ResuableInput
              label="Status"
              name="status"
              type="text"
              register={register}
              validation={{
                required: "Status Name is required",
                minLength: { value: 3, message: "Minimum length is 3" },
              }}
              error={errors.status?.message}
              placeholder="Status"
            />
          </div>
        </div>

        {/* Image Field */}
        <h3 className="text-base font-semibold text-color mt-3">
          Upload Image
        </h3>

        <div className="w-full md:w-1/2 dark:bg-darkButtonBg rounded-md bg-white">
          <SingleFileUpload
            attachment={
              mediaFormData.attachment
                ? new File([], mediaFormData.attachment.name, {
                    type: mediaFormData.attachment.type,
                  })
                : null
            }
            onFileChange={(file) => handleInputChange("attachment", file)}
            allowedFileTypes={["image/jpeg", "image/png", "image/webp"]}
            maxFileSize={3}
            id="single-product"
            cardTitle="Main Image"
            cardTititleStyle="text-[#12B76A]"
            cardDes="Here File Size Max 3 MB"
          />
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

export default AddBrand;
