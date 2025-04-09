"use client";

import TabNavigation from "@/components/ui/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

const tabs = [
  {
    label: "Product Details",

    href: "/product-upload",
  },

  {
    label: "Variations",

    href: "/product-upload/variations",
  },
  {
    label: "Media",

    href: "/product-upload/media",
  },
  { label: "Payment Type", href: "/product-upload/payment-type" },
  {
    label: "Policies",

    href: "/product-upload/policies",
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
        />
        <TabNavigation tabs={tabs} />
      </div>
      {/* main content */}
      <div className=" min-h-[86vh]">{children}</div>
    </div>
  );
}
