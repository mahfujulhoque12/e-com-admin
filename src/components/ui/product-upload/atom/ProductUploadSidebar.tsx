// components/ProductUploadSidebar.tsx

import { setActiveTab } from "@/redux/feature/product-upload/productUploadSlice";
import { RootState } from "@/redux/redux-store/store";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProductUploadSidebarProps {
  tabs: string[];
}

const ProductUploadSidebar: React.FC<ProductUploadSidebarProps> = ({
  tabs,
}) => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.products.activeTab);

  return (
    <div className="mb-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`cursor-pointer  p-3 mx-5  inline-block gap-5 capitalize text-lg font-semibold ${
            activeTab === tab
              ? "font-bold text-[#1768D0] border-b-2 border-[#1768D0]"
              : ""
          }`}
          onClick={() => {
            console.log("Changing tab to:", tab); // Debugging log
            dispatch(setActiveTab(tab));
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
        </button>
      ))}
    </div>
  );
};

export default ProductUploadSidebar;
