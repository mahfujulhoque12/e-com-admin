"use client";

import { RootState } from "@/redux/redux-store/store";

import React from "react";
import { useSelector } from "react-redux";
import ProductDetailsForm from "./ProductDetailsForm";

import MediaForm from "./MediaForm";
import PaymentForm from "./PaymentForm";
import PolicyForm from "./PolicyForm";
import VariationsForm from "./VariationsForm";
import ProductUploadSidebar from "./atom/ProductUploadSidebar";

const ProductUploadWrapper: React.FC = () => {
  const activeTab = useSelector((state: RootState) => state.products.activeTab);
  const tabs = [
    "product-details",
    "variations",
    "media",
    "payment-type",
    "policies",
  ];

  return (
    <div className="p-3 md:p-5  gap-5">
    


      <div className="w-full">
        <ProductUploadSidebar tabs={tabs} />
        {activeTab === "product-details" && (
          <div>
            <ProductDetailsForm />
          </div>
        )}
        {activeTab === "variations" && (
          <div>
            <VariationsForm />
          </div>
        )}
        {activeTab === "media" && (
          <div>
            <MediaForm />
          </div>
        )}
        {activeTab === "payment-type" && (
          <div>
            <PaymentForm />
          </div>
        )}
        {activeTab === "policies" && (
          <div>
            <PolicyForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductUploadWrapper;
