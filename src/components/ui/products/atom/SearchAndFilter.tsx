import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCloudDownloadOutline, IoFilterSharp } from "react-icons/io5";

const SearchAndFilter = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 w-full">
      {/* Left - Search */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-sm font-medium text-[#455468]">Search:</span>
        <input
          type="text"
          placeholder="search here..."
          className="placeholder:text-[#8391A1] border px-3 border-[#D7DFE9] rounded-md py-1"
        />
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto">
        <button className="text-[#455468] font-semibold text-sm border border-[#D7DFE9] px-3 flex items-center gap-1 cursor-pointer py-1 rounded-md hover:bg-[#0070FF] hover:text-white transition-all duration-300">
          <IoFilterSharp size={15} />
          Filter
        </button>

        <button className="text-[#455468] font-semibold text-sm border border-[#D7DFE9] px-3 flex items-center gap-1 cursor-pointer py-1 rounded-md hover:bg-[#0070FF] hover:text-white transition-all duration-300">
          <IoCloudDownloadOutline size={15} />
          Export
        </button>

        <button className="font-semibold text-sm border border-[#D7DFE9] px-3 flex items-center gap-1 cursor-pointer py-1 rounded-md bg-[#0070FF] text-white transition-all duration-300">
          <IoIosAddCircleOutline size={15} />
          Add{"\u00A0"}Product
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
