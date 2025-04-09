/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/redux-store/store";
import {
  MediaFormData,
  setMediaFormData,
} from "@/redux/feature/product-upload/media/mediaSlice";

import { FieldErrors, useForm } from "react-hook-form";

import { PolicyTypes } from "@/types/PolicyTypes";
import SingleFileUpload from "./atom/SingleFileUpload";
import MultipleFileUpload from "./atom/MultipuleFileUpload";
import Switch from "./atom/Switch";
import ResuableInput from "./atom/ResuableInput";

const MediaForm = () => {
  const mediaFormData = useSelector((state: RootState) => state.media);
  const dispatch = useDispatch<AppDispatch>();

  const attachmentRef = useRef<File | null>(null);
  const multipleFilesRef = useRef<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PolicyTypes>({
    defaultValues: {},
    mode: "onSubmit",
  });

  const handleInputChange = (field: keyof MediaFormData, value: any) => {
    if (field === "attachment" && value instanceof File) {
      attachmentRef.current = value; // Store the actual file in ref
      dispatch(
        setMediaFormData({
          attachment: { name: value.name, size: value.size, type: value.type },
        })
      );
    } else if (field === "multipuleFile") {
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

  const onSubmit = async (data: PolicyTypes) => {
    try {
      const formDataToSend = new FormData();

      Object.entries(mediaFormData).forEach(([key, value]) => {
        if (key !== "attachment" && key !== "multipuleFile") {
          formDataToSend.append(key, value as string);
        }
      });

      // Add actual files from refs
      if (attachmentRef.current) {
        formDataToSend.append("attachment", attachmentRef.current);
      }

      multipleFilesRef.current.forEach((file) => {
        formDataToSend.append("multipuleFile", file);
      });

      // ✅ Instead of sending to API, log the data
      for (const [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }
    } catch (error) {
      console.error("Error preparing data:", error);
    }
    console.log(data, "react-hook-form data get");
  };

  const onError = (errors: FieldErrors<PolicyTypes>) => {
    console.log(errors, "form errors");
  };

  return (
    <div className="p-5 bg-white rounded-md mt-5 md:mt-0">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <h1 className="text-[#333B4E] text-xl font-semibold ">Media</h1>
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
        <div className="w-full md:w-1/2 mt-10 dark:bg-darkButtonBg rounded-md">
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

        {/* YouTube Video Link */}
        <div className="shadow-md  bg-white mt-6 p-5 dark:bg-darkButtonBg rounded-md">
          <div className="flex items-center gap-4">
            <h1 className="text-[#333B4E] text-sm sm:text-lg md:text-xl font-semibold ">
              Allow YouTube Video
            </h1>
            <Switch
              isChecked={mediaFormData.allowYouTube}
              onChange={() =>
                handleInputChange("allowYouTube", !mediaFormData.allowYouTube)
              }
            />
          </div>

          <div
            className={`transition-all duration-300 ${
              !mediaFormData.allowYouTube
                ? "blur-xs pointer-events-none opacity-100"
                : ""
            }`}
          >
            <div className="flex flex-col md:flex-row gap-3 mt-5">
              <div className="w-full">
                <ResuableInput
                  label="You Tube Video Link"
                  name="youTube"
                  type="text"
                  register={register}
                  validation={{
                    required: "You Tube Link is required",
                    minLength: { value: 3, message: "Minimum length is 3" },
                  }}
                  error={errors.youTube?.message}
                  placeholder="First Name"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end items-center gap-3">
          {/* Cancel Button */}
          <button
            type="button"
            className="px-2 md:px-4 flex py-1 md:py-2 text-xs sm:text-sm font-medium text-gray-700  border border-gray-300  rounded-md hover:bg-red-400  hover:text-white transition-all duration-300"
            onClick={() => {
              console.log("Form cancelled"); // Add logic to reset or navigate
            }}
          >
            Cancel
          </button>

          {/* Save Button */}
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

export default MediaForm;
