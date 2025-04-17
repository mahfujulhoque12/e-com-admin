import { setCurrentPage } from "@/redux/feature/pagianation/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

interface PaginationProps {
  paginationKey: string; // 👈 accepts the scope key like 'review'
}

const Pagination: React.FC<PaginationProps> = ({ paginationKey }) => {
  const dispatch = useAppDispatch();

  const currentPage = useAppSelector(
    (state) => state.pagination[paginationKey]?.currentPage || 1
  );
  const totalPages = useAppSelector(
    (state) => state.pagination[paginationKey]?.totalPages || 1
  );

  const pageRange = 1;

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage({ key: paginationKey, page }));
  };

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
            onClick={() => handlePageChange(i)}
            className={`px-2 py-1 rounded-md text-sm font-semibold mx-1 transition ${
              i === currentPage
                ? "bg-[#1571E7] text-white"
                : "bg-background text-color hover:bg-gray-200 dark:hover:bg-gray-600"
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
            className="px-2 py-1 text-sm text-[#243045] dark:text-gray-200"
          >
            <BsThreeDots />
          </span>
        );
        ellipsisAdded = true;
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm font-semibold rounded-md bg-[#F9FBFC] text-[#243045] disabled:opacity-50"
      >
        <BiChevronLeft className="w-4 h-4" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm font-semibold rounded-md bg-[#F9FBFC] text-[#243045] disabled:opacity-50"
      >
        <BiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
