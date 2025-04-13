"use client";

import TabNavigation from "@/components/ui/products/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";

import {
  FaClipboardList,
  FaObjectUngroup,
  FaPeopleArrows,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { RiFileAddFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

const tabs = [
  {
    label: "Customer List",

    icon: <FaClipboardList size={18} />,
    href: "/customer",
  },

  {
    label: "Add Group",
    icon: <RiFileAddFill size={18} />,

    href: "/customer/add-group",
  },
  {
    label: "Blocked Customer",
    icon: <TbBoxMultipleFilled size={18} />,

    href: "/customer/blocked-customer",
  },
  {
    label: "Customer Groups",
    icon: <FaObjectUngroup size={18} />,

    href: "/customer/customer-groups",
  },

  {
    label: "Settings",
    icon: <IoSettings size={18} />,
    href: "/customer/settings",
  },
];
export default function CustomerLayout({
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
          title="Customer"
          icon={<FaPeopleArrows />}
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
