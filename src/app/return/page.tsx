"use client";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import React from "react";
import { PiKeyReturnFill } from "react-icons/pi";

import { useDispatch } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };
  return (
    <div>
      {" "}
      <div className="sticky top-0 left-0 z-50  ">
        <Topbar
          handleHamburgerClick={handleHamburgerClick}
          title="Return"
          icon={<PiKeyReturnFill />}
        />
      </div>
    </div>
  );
};

export default Page;
