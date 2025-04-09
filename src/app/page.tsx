"use client";

import SubCategoryWrapper from "@/components/ui/sub-category/SubCategoryWrapper";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };
  return (
    <div>
      <div className="sticky top-0 left-0 z-50  ">
        <Topbar handleHamburgerClick={handleHamburgerClick} />
      </div>

      <SubCategoryWrapper />
    </div>
  );
}
