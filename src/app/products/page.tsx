"use client";

import React from "react";
import ProductsLayout from "./(products)/layout";
import ProductListPage from "./(products)/page";

const Page = () => {
  return (
    <ProductsLayout>
      <ProductListPage />
    </ProductsLayout>
  );
};

export default Page;
