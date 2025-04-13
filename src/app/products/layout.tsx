"use client";

import TabNavigation from "@/components/ui/products/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import { BsCartXFill } from "react-icons/bs";

import { FaClipboardList, FaUserTie } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { TbBoxMultipleFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { RiDashboardLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";

const tabs = [
  {
    label: "Product List",

    icon: <FaClipboardList size={18} />,
    href: "/products",
  },

  {
    label: "Add Products",
    icon: <RiFileAddFill size={18} />,

    href: "/products/add-product",
  },
  {
    label: "Commissions",
    icon: <TbBoxMultipleFilled size={18} />,

    href: "/products/commissions",
  },
  {
    label: "Vendor Products",
    href: "/products/vendor-products",
    icon: <BsCartXFill size={18} />,
  },
  {
    label: "Affiliate",
    icon: <FaUserTie size={18} />,
    href: "/products/affiliate",
  },
  {
    label: "Settings",
    icon: <IoSettings size={18} />,
    href: "/products/settings",
  },
];
export default function ProductLayout({
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
          isTopbarStyle={true}
          icon={<RiDashboardLine />}
          title="Products"
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
