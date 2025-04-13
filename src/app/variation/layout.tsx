"use client";

import TabNavigation from "@/components/ui/products/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";

import { FaClipboardList } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

import { MdCategory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const tabs = [
  {
    label: "Variation List",

    icon: <FaClipboardList size={18} />,
    href: "/variation",
  },

  {
    label: "Add Variation",
    icon: <RiFileAddFill size={18} />,

    href: "/variation/add-variation",
  },
  {
    label: " Variation Group",
    icon: <TbBoxMultipleFilled size={18} />,

    href: "/variation/variation-group",
  },

  {
    label: "Settings",
    icon: <IoSettings size={18} />,
    href: "/variation/settings",
  },
];
export default function ProductCategoryLayout({
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
          title="Product Categories"
          icon={<MdCategory />}
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
