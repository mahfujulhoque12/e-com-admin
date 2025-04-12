"use client";

import React from "react";
import Image from "next/image";

import logo from "/public/sidebar/logo.png";
import mobileLogo from "/public/sidebar/mobile-logo.png";

import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { cn } from "@/lib/utils";

type SidebarHeaderProps = {
  isOpen: boolean;
  toggleAppSlidebar: () => void;
  className?: string;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isOpen,
  toggleAppSlidebar,
  className,
}) => {
  return (
    <div
      className="sticky  top-0 flex items-center justify-between p-4  flex-shrink-0"
      onMouseEnter={(e) => {
        e.stopPropagation();
      }}
    >
      <Link href="/" className="flex items-center justify-center">
        {isOpen ? (
          <Image
            src={logo}
            alt="Full Logo"
            width={150}
            height={50}
            className="h-[30px]"
          />
        ) : (
          <Image
            src={mobileLogo}
            alt="Mobile Logo"
            width={40}
            height={40}
            className="w-[30px] h-[30px]"
          />
        )}
      </Link>
      <div
        className={cn(
          `hidden lg:block absolute bg-primary border border-gray-300 dark:border-gray-600 right-[-16px] rounded-full top-[50%] shadow-md`,
          className
        )}
      >
        <button
          onClick={toggleAppSlidebar}
          className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 focus:outline-none cursor-pointer  dark:hover:text-gray-200 "
        >
          {isOpen ? <BiChevronLeft size={20} /> : <BiChevronRight size={20} />}
        </button>
      </div>
    </div>
  );
};

export default SidebarHeader;
