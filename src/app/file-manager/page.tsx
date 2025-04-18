"use client";
import FileManagerWrapper from "@/components/ui/file-manager/FileManagerWrapper";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import React from "react";
import { MdOutlineInsertDriveFile } from "react-icons/md";
import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };
  return (
    <div>
      <div className="sticky top-0 left-0 z-50  ">
        <Topbar
          handleHamburgerClick={handleHamburgerClick}
          title="File Manager"
          icon={<MdOutlineInsertDriveFile/>}
        />
      </div>
      <FileManagerWrapper />
    </div>
  );
};

export default Page;
