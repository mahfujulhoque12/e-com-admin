"use client";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Provider } from "react-redux";
import { store } from "@/redux/redux-store/store";
import Layout from "@/components/ui/global/Layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-[#eff3f8] overflow-x-hidden p-5 `}
      >
        <Provider store={store}>
            <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}