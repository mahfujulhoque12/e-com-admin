import React from "react";
import ProductLayout from "./(product-upload)/layout";

import ProductDetailsPage from "./(product-upload)/page";

const page = () => {
  return (
    <ProductLayout>
      <ProductDetailsPage />
    </ProductLayout>
  );
};

export default page;
