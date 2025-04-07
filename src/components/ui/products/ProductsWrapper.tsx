import React from "react";

const ProductsWrapper = () => {
  return (
    <div className="bg-white shadow-md p-5 mt-5 rounded-md">
      <div className="flex items-center gap-2 ">
        <h2 className="text-[#455468] font-semibold text-2xl"> Products</h2>
        <span className="bg-[#F0F3F9] text-[#5E718D] text-xs font-medium px-2 py-0.5 rounded-md mt-1.5">
          100 items
        </span>
      </div>
    </div>
  );
};

export default ProductsWrapper;
