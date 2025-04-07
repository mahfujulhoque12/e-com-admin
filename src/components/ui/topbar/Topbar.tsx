import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaAngleDown, FaCloudMoon } from "react-icons/fa";
import flag from "/public/topbar/flag.svg";
import admin from "/public/topbar/admin.png";

import { BiMenu } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { PiBellZBold } from "react-icons/pi";
import Profile from "./atom/Profile";

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      close();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, toggle, close, ref };
};

interface TopBarProps {
  handleHamburgerClick: () => void;
  isTopbarStyle?: boolean;
}

const Topbar: React.FC<TopBarProps> = ({
  handleHamburgerClick,
  isTopbarStyle,
}) => {
  const languageDropdown = useDropdown();
  const adminDropdown = useDropdown();
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Controls whether the mobile "expanded" menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageSelection = (language: string) => {
    setSelectedLanguage(language);
    languageDropdown.close();
  };

  return (
    <div
      className={`flex items-center justify-between bg-white p-3 flex-shrink-0 dark:bg-darkPrimaryBg ${
        isTopbarStyle ? " " : "shadow-sm rounded-md"
      }`}
    >
      {/* Breadcrumb Section */}
      <div className="ml-4 flex gap-x-2 items-center">
        <button
          onClick={handleHamburgerClick}
          className="w-10 h-10  lg:hidden  "
          aria-label="Toggle Sidebar"
        >
          <BiMenu className="w-6 h-6 text-gray-700 " />
        </button>
        <button className=" flex gap-2.5 items-center text-3xl text-[#333B4E] font-semibold m-0 md:mt-0">
          <RiDashboardLine />
          Bread cumb
        </button>
      </div>

      {/* Right side content */}
      <div className="flex items-center gap-2 relative">
        {/* MOBILE ONLY: The "txt" button that toggles the rest of the icons */}
        <button
          className="bg-[#F4F7FE4D] relative text-[#8391A1] shadow-sm p-2 rounded-full dark:bg-darkbuttonBg  block md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>

        {/* This entire block is always shown on desktop (md:flex), 
            and shown on mobile only when isMobileMenuOpen is true */}
        <div
          className={`
            ${
              isMobileMenuOpen
                ? "flex flex-col md:flex-row absolute top-12 right-5   bg-white dark:bg-darkPrimaryBg rounded-md shadow-md  animate-slide-down px-4 py-2"
                : "hidden top-0 right-0 "
            } 
            md:flex 
            gap-5
            items-center
            md:mt-0
            ml-3
          `}
        >
          {/* Action buttons: Mail & Notifications */}
          <div
            className="flex flex-col md:flex-row gap-4 "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center gap-2">
              <button className="bg-[#F4F7FE4D] relative text-[#0A0E1F] shadow-sm p-2 rounded-full dark:bg-darkbuttonBg ">
                <PiBellZBold size={18} />
                <span className="bg-[#f23e43] text-white p-[2px] text-[6px] rounded-full absolute top-0 right-0">
                  99+
                </span>
              </button>
              <span className="text-xs md:hidden">Notification</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#F4F7FE4D] relative text-[#0A0E1F] shadow-sm p-2 rounded-full dark:bg-darkbuttonBg ">
                <FaCloudMoon size={18} />
              </button>
              <span className="text-xs md:hidden">Theme</span>
            </div>
          </div>

          {/* Language Dropdown */}
          <div
            className="flex items-center gap-1 relative -mt-3 md:-mt-0"
            ref={languageDropdown.ref}
            onKeyDown={(event) => {
              if (event.key === "Escape") languageDropdown.close();
            }}
          >
            <Image
              src={flag}
              width={50}
              height={50}
              alt="flag"
              className="w-6 h-5 cursor-pointer"
              onClick={languageDropdown.toggle}
            />
            <button
              className="mr-0 sm:mr-2  text-[#8391A1] bg-white rounded p-1 text-sm relative cursor-pointer dark:bg-darkbuttonBg "
              onClick={languageDropdown.toggle}
              aria-haspopup="true"
              aria-expanded={languageDropdown.isOpen}
            >
              <span className="flex items-center gap-1">
                {selectedLanguage}
                <FaAngleDown />
              </span>
            </button>
            {languageDropdown.isOpen && (
              <ul className="absolute animate-slide-down z-[60] bg-white shadow-md rounded w-24 top-10 border border-gray-300">
                {["English", "Bangla", "Arabic"].map((language) => (
                  <li
                    key={language}
                    className="px-4 py-2 text-sm text-[#8391A1] hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleLanguageSelection(language);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Admin Dropdown */}
        <div
          className="flex items-center gap-3 relative"
          ref={adminDropdown.ref}
        >
          <Image
            src={admin}
            width={50}
            height={50}
            alt="admin"
            className="w-8 h-8 cursor-pointer"
            onClick={adminDropdown.toggle}
          />
          <button
            className="hidden sm:flex items-center text-sm text-[#8391A1] "
            onClick={adminDropdown.toggle}
            aria-haspopup="true"
            aria-expanded={adminDropdown.isOpen}
          ></button>
          {adminDropdown.isOpen && (
            <ul className="absolute animate-slide-down bg-white shadow-md rounded right-72 w-full top-12  z-60">
              <li>
                <Profile />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
