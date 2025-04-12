import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { fileListData } from "@/data/FilesData";
import Folder from "./Folder";
import CreateNew from "./CreateNew";

const FileHome = () => {
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
    <div>
      {/* search start */}
      <div className="flex items-baseline flex-col sm:flex-row justify-between gap-3">
        <p className="text-gray-600 dark:text-gray-200 font-semibold text-2xl ">
          Folders
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#455468] dark:text-gray-300 ">
            Search:
          </span>
          <input
            type="text"
            placeholder="search here..."
            className="placeholder:text-[#8391A1] dark:placeholder:text-gray-300 border px-3 border-[#D7DFE9] rounded-md py-1 dark:border-gray-700"
          />
        </div>
      </div>
      <CreateNew />
      {/* search end */}

      {/* folder Start */}
      <Folder />
      {/* folder end */}

      {/* table start */}
      <div className="w-full overflow-x-auto p-5 border border-gray-200 dark:border-gray-700 mt-5 shadow-md rounded-md ">
        <h3 className="pb-5 font-semibold text-lg text-gray-600 dark:text-gray-200">
          Recent Files
        </h3>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  File&nbsp;Name
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  Last&nbsp;Modified
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  File&nbsp;Size
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  Members
                </th>
                <th className="px-6 py-5 text-left text-base font-semibold text-[#455468] dark:text-gray-300 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-background">
              {fileListData.map((product) => (
                <tr
                  key={product.id}
                  className={
                    product.id % 2 === 0
                      ? "bg-[#F9FAFB] dark:bg-[#111827]"
                      : "bg-white dark:bg-[#1e293b]"
                  }
                >
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.fileName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    <div className="flex flex-col">
                      <span>{product.lastModify}</span>
                      {product.author}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.fileSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.owner}
                  </td>
                  <td className="px-6 w-full flex py-4 whitespace-nowrap font-medium text-sm text-[#455468] dark:text-gray-300">
                    {product.members.map((member, index) => (
                      <Image
                        key={index}
                        src={member}
                        width={60}
                        height={60}
                        alt="img"
                        className={`h-8 lg:h-12 w-8 lg:w-12 object-cover rounded-full border border-gray-300 ${
                          index > 0 ? "-ml-2" : ""
                        }`}
                      />
                    ))}
                  </td>
                  <td className="px-6 py-4 relative whitespace-nowrap text-sm font-medium">
                    <div
                      ref={(ref) => {
                        dropdownRefs.current[product.id] = ref;
                      }}
                    >
                      <button
                        onClick={() => toggleDropdown(product.id)}
                        className="cursor-pointer text-[#1C274C] dark:text-gray-300"
                      >
                        <HiDotsVertical size={20} />
                      </button>
                      {openDropdown === product.id && (
                        <div className="absolute left-12 top-6 bg-white shadow-md px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
                          <button className="text-indigo-600 cursor-pointer hover:text-indigo-900 mr-4">
                            Edit
                          </button>
                          <button className="text-red-600 hover:text-red-900 cursor-pointer">
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* table end */}
    </div>
  );
};

export default FileHome;
