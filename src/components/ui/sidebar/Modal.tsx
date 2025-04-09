// Updated Modal.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { IoCloseCircle } from "react-icons/io5";

import { shortcutData } from "@/data/ShortcutData";
import { ManageData } from "@/data/ManageData";
import { advertiseData } from "@/data/AdvertiseData";
import { analyzeeData } from "@/data/AnalyzeeData";
import { engageData } from "@/data/EngageData";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;

  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,

  className,
}) => {
  if (!isModalOpen) return null;

  return (
    <div
      className={cn(
        "bg-white max-h-[80vh] relative box-border overflow-y-auto rounded-2xl p-6 shadow-xl  w-[80%] xl:max-w-[70%] 2xl:max-w-[50%] ",
        className
      )}
    >
      <button
        onClick={onClose}
        className="absolute top-0 right-0 px-4 py-2 text-red-500"
      >
        <IoCloseCircle size={25} />
      </button>
      <div className="mt-5 flex items-center justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">All Tools</h2>
        <Link
          href="#"
          className="text-sm font-semibold text-blue-400 underline bg-[#f7f7f7] px-3 rounded-md py-1 shadow-md"
        >
          Go to Shortcut
        </Link>
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mt-5">Shortcuts</h3>

      {/* cards start */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5">
        {shortcutData.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow-md rounded-md p-4 border border-gray-300"
          >
            <data.icon size={35} className="flex mx-auto" />
            <p className="text-sm font-semibold text-gray-500 text-center mt-2">
              {data.title}
            </p>
          </div>
        ))}
      </div>
      {/* cards end */}

      {/* items list start */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        <div className="flex flex-col w-auto">
          <h3 className="text-lg font-semibold text-gray-700">Manage</h3>

          {ManageData.map((data) => (
            <Link
              key={data.id}
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-gray-600 mt-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white  transition-all duration-300"
            >
              <data.icon size={18} />
              {data.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-auto">
          <h3 className="text-lg font-semibold text-gray-700">Advertise</h3>

          {advertiseData.map((data) => (
            <Link
              key={data.id}
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-gray-600 mt-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white  transition-all duration-300"
            >
              <data.icon size={18} />
              {data.title}
            </Link>
          ))}
        </div>
      </div>
      {/* items list start */}

      {/* sec list start */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
        <div className="flex flex-col w-auto">
          <h3 className="text-lg font-semibold text-gray-700">
            Analyzee & Report
          </h3>

          {analyzeeData.map((data) => (
            <Link
              key={data.id}
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-gray-600 mt-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white  transition-all duration-300"
            >
              <data.icon size={18} />
              {data.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-auto">
          <h3 className="text-lg font-semibold text-gray-700">
            Engage Audience
          </h3>

          {engageData.map((data) => (
            <Link
              key={data.id}
              href="#"
              className="flex items-center gap-2 text-base font-semibold text-gray-600 mt-2 px-2 py-1 rounded hover:bg-blue-600 hover:text-white  transition-all duration-300"
            >
              <data.icon size={18} />
              {data.title}
            </Link>
          ))}
        </div>
      </div>
      {/* sec list end */}
    </div>
  );
};

export default Modal;
