"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { PiImageLight } from "react-icons/pi";
import { RiCloseLine } from "react-icons/ri";
import { InputFile } from "./InputFile";

interface SingleFileUploadProps {
  id: string;
  attachment?: File | null;
  onFileChange: (file: File | null) => void;
  allowedFileTypes?: string[];
  maxFileSize?: number; // in MB
  className?: string;
  cardTitle?: string;
  cardTititleStyle?: string;
  cardDes?: string;
}

const SingleFileUpload: React.FC<SingleFileUploadProps> = ({
  onFileChange,
  allowedFileTypes = ["image/jpeg", "image/png", "image/webp"],
  maxFileSize = 3,
  className,
  cardTitle,
  cardDes,
  id,
}) => {
  const [selectedFilePreview, setSelectedFilePreview] = useState<string | null>(
    null
  );
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault(); // Prevent any default behavior
    event.stopPropagation(); // Stop the event from propagating up

    const file = event.target.files?.[0] || null;
    if (file && validateFile(file)) {
      onFileChange(file);
      setSelectedFilePreview(URL.createObjectURL(file));
    }
  };

  const handleFileUploadClick = (): void => {
    const fileInput = document.getElementById(id) as HTMLInputElement | null;
    fileInput?.click();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (): void => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      onFileChange(file);
      setSelectedFilePreview(URL.createObjectURL(file));
    }
  };

  const validateFile = (file: File): boolean => {
    if (!allowedFileTypes.includes(file.type)) {
      alert("Invalid file type. Only JPG, PNG, and WEBP are allowed.");
      return false;
    }
    if (file.size / 1024 / 1024 > maxFileSize) {
      alert(`File size exceeds ${maxFileSize}MB limit.`);
      return false;
    }
    return true;
  };

  return (
    <div
      className={cn(
        "mt-8 shadow-md rounded-md p-2 md:p-6 w-full relative box-border dark:bg-[#1e293b]",
        className
      )}
    >
      <h1 className="font-semibold capitalize text-base  text-[#12B76A]">
        {cardTitle}
      </h1>
      <p className="text-[#666666] dark:text-gray-200 text-xs font-normal mt-1">
        {cardDes}
      </p>
      <div
        className={`flex border-dashed border-2 border-[#12B76A] mt-4 rounded-md ${
          isDragOver ? "border-[#12B76A]  bg-blue-100" : "border-[#12B76A] "
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedFilePreview ? (
          <div className="my-5 flex mx-auto">
            <div className="py-5 relative my-auto px-4 border rounded-md shadow-md m-5">
              <button
                className="absolute top-0 right-0 bg-red-300 py-2 text-xs px-2 text-white rounded-full hover:bg-red-500 transition-all duration-200"
                onClick={() => {
                  setSelectedFilePreview(null);
                  onFileChange(null);
                }}
              >
                <RiCloseLine />
              </button>

              <Image
                src={selectedFilePreview}
                alt="Uploaded File"
                width={250}
                height={250}
              />
            </div>
          </div>
        ) : (
          <div className="flex mx-auto items-center justify-center flex-col py-12">
            <PiImageLight
              size={30}
              onClick={handleFileUploadClick}
              className="cursor-pointer text-[#12B76A]"
            />
            <div>
              <InputFile
                id={id}
                type="file"
                onChange={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleFileInputChange(event);
                }}
                className="hidden"
              />
            </div>

            <span className="text-color py-1 text-xs lg:text-sm font-normal ">
              Drag your files to start uploading
            </span>
            <div className="flex items-center gap-3">
              <span className="w-[50px] sm:w-[160px] h-[1px] bg-[#DCDCDC] block"></span>
              <span className="font-normal text-xs lg:text-xs text-[#7C7C7C] ">
                OR
              </span>
              <span className="w-[50px] sm:w-[160px] h-[1px] bg-[#DCDCDC] block"></span>
            </div>
            <button
              type="button"
              onClick={handleFileUploadClick}
              className="text-white border px-3 py-1.5 rounded-md mt-3 bg-[#12B76A]  text-sm"
            >
              Choose File
            </button>
          </div>
        )}
      </div>
      <p className="text-[#656565] dark:text-gray-300 font-normal text-sm mt-2 lg:text-base sm:mt-1 ">
        <span className="text-[#FF2147]"> Note:</span> Upload only JPG, PNG &
        WEBP File Here. File Size Max {maxFileSize} MB
      </p>
    </div>
  );
};

export default SingleFileUpload;
