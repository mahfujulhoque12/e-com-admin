"use client";
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";

import productsReducer from "../feature/product-upload/productUploadSlice";
import productDetailsReducer from "../feature/product-upload/product-details/productDetailsSlice";
import variationsReducer from "../feature/product-upload/variations/variationsSlice";
import mediaReducer from "../feature/product-upload/media/mediaSlice";
import paymentReducer from "../feature/product-upload/payment/paymentSlice";
import policyReducer from "../feature/product-upload/policy/policySlice";
import sidebarReducer from '../feature/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    variations: variationsReducer,
    media: mediaReducer,
    payment: paymentReducer,
    policy: policyReducer,
    sidebar: sidebarReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Export store type for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
