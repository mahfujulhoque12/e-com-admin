"use client";

import MediaForm from "@/components/ui/products/product-upload/MediaForm";
import PaymentForm from "@/components/ui/products/product-upload/PaymentForm";
import PolicyForm from "@/components/ui/products/product-upload/PolicyForm";
import ProductDetailsForm from "@/components/ui/products/product-upload/ProductDetailsForm";
import VariationsForm from "@/components/ui/products/product-upload/VariationsForm";
import React, { useState } from "react";

import { FaCheckCircle } from "react-icons/fa";

const Page = () => {
  interface Tab {
    id: string;
    label: string;
  }

  const [activeTab, setActiveTab] = useState("product-details");

  const tabs: Tab[] = [
    { id: "product-details", label: "Product Details" },
    { id: "variations", label: "Variations" },
    { id: "media", label: "Media" },
    { id: "payment-type", label: "Payment Type" },
    { id: "policies", label: "Policies" },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "product-details":
        return <ProductDetailsForm />;
      case "variations":
        return <VariationsForm />;
      case "media":
        return <MediaForm />;
      case "payment-type":
        return <PaymentForm />;
      case "policies":
        return <PolicyForm />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="p-8 bg-primary shadow-md rounded-md mt-5">
      <h2 className="text-xl font-semibold text-color py-3">New Product</h2>
      <div className="flex w-full overflow-x-auto border-b border-gray-300 dark:border-gray-700 items-center">
        <div className="flex whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 flex gap-1 items-center text-base py-2 font-medium ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                  : "text-gray-600 dark:text-gray-200 hover:text-blue-600"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <FaCheckCircle />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">{renderContent()}</div>
    </div>
  );
};

export default Page;
