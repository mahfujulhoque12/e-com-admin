import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarHeader from "./SidebarHeader";
import { IoCloseSharp, IoMenu, IoSettingsOutline } from "react-icons/io5";
import {
  BookingIcon,
  CustomerIcon,
  DashboardIcon,
  ReportIcon,
  SearchIcons,
  TopupIcon,
  EmployeeIcon,
  CompanyIcon,
  RefundIcon,
} from "./Icons";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineInsertDriveFile } from "react-icons/md";

import { HiOutlineLogout } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

type SidebarItem = {
  label: string;
  href: string;
  icon: React.ElementType<{
    fill?: string;
    width?: number;
    height?: number;
    className?: string;
  }>;
};

const items: SidebarItem[] = [
  { label: "Sub-category", href: "/sub-category", icon: DashboardIcon },
  { label: "Product", href: "/product-upload-main", icon: BookingIcon },
  { label: "Products", href: "/products-main", icon: SearchIcons },
  { label: "Category", href: "/category", icon: RefundIcon },
  {
    label: "File Manager",
    href: "/file-manager",
    icon: MdOutlineInsertDriveFile,
  },
  { label: "Variation", href: "/variation", icon: TopupIcon },
  { label: "Customer", href: "/customer", icon: CustomerIcon },
  { label: "Reports", href: "#", icon: ReportIcon },

  { label: "Employees", href: "#", icon: EmployeeIcon },
  { label: "Company", href: "#", icon: CompanyIcon },
  { label: "Support", href: "#", icon: MdOutlineSupportAgent },
];

interface SidebarProps {
  toggleAppSlidebar: () => void;
  isOpen: boolean;
  isMobileMenuOpen: boolean;
  handleHamburgerClick: () => void;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  toggleAppSlidebar,
  isOpen,
  isMobileMenuOpen,
  handleHamburgerClick,
  setIsMobileMenuOpen,
}) => {
  const rawPathname = usePathname();
  const pathname = rawPathname === "/" ? "/dashboard" : rawPathname;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        {/* Sidebar */}
        <Backdrop onClick={handleHamburgerClick} isVisible={isMobileMenuOpen} />
        <div
          className={cn(
            "fixed  top-0 left-0 z-[61] bg-white shadow-lg dark:bg-darkPrimaryBg h-screen lg:h-[calc(100vh-40px)] transition-all duration-300 transform",
            isMobileMenuOpen
              ? "translate-x-0 scale-100 shadow-active "
              : "-translate-x-full shadow-hidden",
            "lg:translate-x-0 lg:top-5 lg:left-5 lg:rounded-md lg:shadow-none",
            isOpen || isMobileMenuOpen ? "w-56" : "w-20"
          )}
        >
          {/* Sidebar Wrapper */}
          <div className="flex  flex-col h-full gap-y-3 relative">
            <button
              className="hover:bg-[#F5F7FA] px-1 py-1 absolute right-1 top-1 rounded-full block lg:hidden z-[62]"
              onClick={handleHamburgerClick}
            >
              <IoCloseSharp className="w-5 h-5 text-gray-500" />
            </button>
            {/* Sidebar Header */}
            <SidebarHeader
              isOpen={isOpen || isMobileMenuOpen}
              toggleAppSlidebar={toggleAppSlidebar}
            />

            {/* Navigation Items */}
            <nav className="flex-grow overflow-y-auto space-y-2 nav-no-scrollbar  px-3">
              {items.map((item, index) => {
                const Icon = item.icon;
                // const isActive = pathname.startsWith(item.href);
                const isActive =
                  item.href === "/"
                    ? pathname === "" // Root is only active when there's no specific path
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 p-3 text-base font-normal rounded-md transition-all duration-200 ",
                      "hover:text-white hover:bg-[#1768D0]",
                      isActive ? "bg-[#1768D0] text-white " : "text-gray-700 ",
                      !(isOpen || isMobileMenuOpen) && "justify-center"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-200",
                        isActive
                          ? "text-white "
                          : "text-gray-900 group-hover:text-white  dark:group-hover:text-white"
                      )}
                    >
                      <Icon
                        fill="currentColor"
                        className="h-5 w-5 transition-colors duration-200"
                      />
                    </div>

                    {(isOpen || isMobileMenuOpen) && (
                      <span
                        className={cn(
                          "transition-opacity duration-200 ",
                          isActive
                            ? "text-white"
                            : "text-gray-700 group-hover:text-white "
                        )}
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Logout Section */}
            <div className="flex-shrink-0 px-4 py-3 ">
              <button
                onClick={() => setShowModal(true)}
                className={cn(
                  "group flex items-center gap-3 p-3 text-base font-semibold rounded-md transition-all duration-300 hover:text-white hover:bg-[#1768D0]",
                  "text-gray-700",
                  !(isOpen || isMobileMenuOpen) && "justify-center"
                )}
              >
                <IoMenu size={25} />
                {(isOpen || isMobileMenuOpen) && "All Menu"}
              </button>

              <Link
                href="#"
                className={cn(
                  "group flex items-center gap-3 p-3 text-base font-semibold rounded-md transition-all duration-300 hover:text-white hover:bg-[#1768D0]",
                  pathname === "#" && "bg-[#1768D0] text-white",
                  !(isOpen || isMobileMenuOpen) && "justify-center",
                  "text-gray-700"
                )}
              >
                <IoSettingsOutline className="" size={25} />

                {(isOpen || isMobileMenuOpen) && "Settings"}
              </Link>

              <Link
                href="#"
                className={cn(
                  "group flex items-center gap-3 p-3 text-base font-semibold rounded-md transition-all duration-300 hover:text-white hover:bg-[#1768D0] ",
                  pathname === "#" && "bg-[#1768D0] text-white",
                  !(isOpen || isMobileMenuOpen) && "justify-center",
                  "text-gray-700"
                )}
              >
                <HiOutlineLogout className="" size={25} />

                {(isOpen || isMobileMenuOpen) && "Logout"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-[10vh] max-h-[80vh] overflow-y-scroll inset-0 z-[100] flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />
          <Modal
            isModalOpen={showModal}
            onClose={() => setShowModal(false)}
          ></Modal>
        </div>
      )}
    </>
  );
};

export default Sidebar;
