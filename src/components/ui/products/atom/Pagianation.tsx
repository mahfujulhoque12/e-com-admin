import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaEllipsis } from "react-icons/fa6";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 10;
  const pageRange = 3;

  const renderPageNumbers = () => {
    const pages = [];
    let ellipsisAdded = false;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pageRange && i <= currentPage + pageRange)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-md mx-1 text-sm font-semibold ${
              i === currentPage
                ? "bg-[#1571E7] text-white dark:bg-darkMainBg"
                : "bg-[#F9FBFC] text-gray-900 dark:bg-darkButtonBg hover:bg-gray-200"
            }`}
          >
            {i}
          </button>
        );
        ellipsisAdded = false;
      } else if (!ellipsisAdded) {
        pages.push(
          <span
            key={`ellipsis-${i}`}
            className="px-2 py-1.5 text-sm font-semibold rounded-md bg-[#F5F7FA] dark:bg-[#F4F7FE4D] text-[#243045]"
          >
            <FaEllipsis className="w-4 h-4" />
          </span>
        );
        ellipsisAdded = true;
      }
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2 mb-4 sm:mb-0">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-2 py-1.5 text-sm font-semibold rounded-md bg-[#F9FBFC] text-[#243045] disabled:opacity-50 dark:bg-[#F4F7FE4D] shadow-md hover:bg-gray-200 disabled:hover:bg-[#F9FBFC]"
      >
        <BiChevronLeft className="w-4 h-4" />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-2 py-1.5 text-sm font-semibold rounded-md bg-[#F5F7FA] text-[#243045] disabled:opacity-50 shadow-md hover:bg-gray-200 disabled:hover:bg-[#F5F7FA]"
      >
        <BiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
