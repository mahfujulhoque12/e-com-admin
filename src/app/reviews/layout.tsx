"use client";

import TabNavigation from "@/components/ui/products/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import { BiSolidCommentEdit } from "react-icons/bi";

import { FaClipboardList, FaObjectUngroup } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiFileAddFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

const tabs = [
  {
    label: "Review List",

    icon: <FaClipboardList size={18} />,
    href: "/reviews",
  },

  {
    label: "Add Review",
    icon: <RiFileAddFill size={18} />,

    href: "/reviews/add-review",
  },
  {
    label: "Blocked reviews",
    icon: <TbBoxMultipleFilled size={18} />,

    href: "/reviews/blocked-reviews",
  },
  {
    label: "reviews Groups",
    icon: <FaObjectUngroup size={18} />,

    href: "/reviews/reviews-groups",
  },

  {
    label: "Settings",
    icon: <IoSettings size={18} />,
    href: "/reviews/settings",
  },
];
export default function ReviewLayout({
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
          title="Reviews"
          icon={<BiSolidCommentEdit />}
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
