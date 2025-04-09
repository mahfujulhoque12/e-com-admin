import { fileMangerData } from "@/data/FileManagerData";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit, CiShare2 } from "react-icons/ci";
import { IoIosLink } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";

const Folder = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id)); // toggle logic
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = Object.values(dropdownRefs.current).every((ref) => {
      return ref && !ref.contains(event.target as Node);
    });

    if (isOutside) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-5">
      {fileMangerData.map((file) => (
        <div
          key={file.id}
          className="bg-white p-2 rounded-md shadow-md relative border border-gray-200"
        >
          <div className="flex items-center">
            <Image
              src={file.img}
              width={300}
              height={300}
              alt="file"
              className="h-28 w-28"
            />
            <div className="flex flex-col">
              <p className="text-base font-semibold text-gray-800">
                {file.title}
              </p>
              <span className="text-sm font-semibold text-gray-600">
                {file.subTitle}
              </span>
            </div>
          </div>

          <div
            ref={(ref) => {
              dropdownRefs.current[file.id] = ref;
            }}
            className="absolute top-6 right-4"
          >
            <button
              onClick={() => toggleDropdown(file.id)}
              className="cursor-pointer"
            >
              <BsThreeDotsVertical size={20} />
            </button>
            {openDropdown === file.id && (
              <div className="absolute right-2 top-8 bg-white shadow-md px-4 py-2 rounded-md border border-gray-300 z-50">
                <button className="text-gray-600 text-base flex items-center gap-3">
                  <CiEdit size={18} />
                  Edit
                </button>
                <button className="text-gray-600 text-base flex items-center gap-3 mt-2">
                  <IoIosLink size={18} />
                  Copy Link
                </button>
                <button className="text-gray-600 text-base flex items-center gap-3 mt-2">
                  <CiShare2 size={18} />
                  Share
                </button>
                <button className="text-gray-600 text-base flex items-center gap-3 mt-2">
                  <LiaDownloadSolid size={18} />
                  Download
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center px-6 pb-5">
            <p className="text-base font-semibold text-gray-500">
              {file.memory}
            </p>
            <BsDot />
            <span className="text-base font-semibold text-gray-500">
              {file.files}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Folder;
