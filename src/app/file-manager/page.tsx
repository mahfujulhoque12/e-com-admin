"use client";
import FileManagerWrapper from "@/components/ui/file-manager/FileManagerWrapper";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };
  return (
    <div>
      <Topbar handleHamburgerClick={handleHamburgerClick} />
      <FileManagerWrapper/>
    </div>
  );
};

export default Page;
