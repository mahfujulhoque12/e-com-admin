"use client";

import TabNavigation from "@/components/ui/products/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";

import { FaClipboardList } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { BiSolidCategory } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";

const tabs = [
  {
    label: "Category List",

    icon: <FaClipboardList size={18} />,
    href: "/category",
  },

  {
    label: "Add Category",
    icon: <RiFileAddFill size={18} />,

    href: "/category/add-category",
  },
  {
    label: "Vendor Categories",
    icon: <TbBoxMultipleFilled size={18} />,

    href: "/category/vendor-categories",
  },

  {
    label: "Settings",
    icon: <IoSettings size={18} />,
    href: "/category/settings",
  },
];
export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <div className="min-h-screen relative">
      {/* top bar */}
      <div className="sticky top-0 left-0 z-50 min-h-[14vh] ">
        <Topbar
          handleHamburgerClick={handleHamburgerClick}
          title="Categories"
          icon={<BiSolidCategory />}
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
