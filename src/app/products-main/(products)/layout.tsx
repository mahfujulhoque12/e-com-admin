"use client";

import TabNavigation from "@/components/ui/product-upload/atom/TabNavigation";
import Topbar from "@/components/ui/topbar/Topbar";
import { toggleMobileMenu } from "@/redux/feature/sidebar/sidebarSlice";
import { useDispatch } from "react-redux";

const tabs = [
  {
    label: "Product list",

    href: "/products-main",
  },

  {
    label: "Order List",

    href: "/products-main/order-list",
  },
  {
    label: "Customer List",

    href: "/products-main/customer-list",
  },
  {
    label: "Payment List",

    href: "/products-main/payment-list",
  },
  {
    label: "Review List",

    href: "/products-main/review-list",
  },
  {
    label: "Banner List",

    href: "/products-main/banner-list",
  },
];
export default function ProductsLayout({
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
