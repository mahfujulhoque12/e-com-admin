import Image from "next/image";
import React from "react";
import admin from "/public/admin/customer.png";

import { RiKeyFill } from "react-icons/ri";
import { IoCardOutline } from "react-icons/io5";
import { MdLocationPin, MdLogout, MdManageAccounts } from "react-icons/md";
import { IoMdSync } from "react-icons/io";
import { FaPen, FaRegUserCircle } from "react-icons/fa";

import Link from "next/link";

const Profile = () => {
  return (
    <div className="rounded-md w-80  bg-primary border border-gray-200 dark:border-gray-700 shadow-md z-[9999]">
      <div className="bg-[#1768D0]  rounded-t-md p-3 h-24">
        <p className="text-center font-semibold text-sm sm:text-base md:text-lg lg:text-lg text-white mt-4">
          JD
        </p>
      </div>
      <div className="relative">
        <Image
          src={admin}
          alt="img"
          width={150}
          height={150}
          className="h-[70px] w-[70px] absolute -top-8 left-[40%]  rounded-full border-2"
        />
      </div>
      <div className="pb-5">
        <p className="text-sm sm:text-base md:text-lg lg:text-lg dark:text-gray-200 text-gray-700 font-semibold mt-12 text-center ">
          Jane Doe
        </p>
        <p className="text-sm sm:text-sm  md:text-sm  lg:text-sm font-normal  text-gray-400 dark:text-gray-300 text-center">
          janedoe520@gmail.com
        </p>
      </div>
      {/* icons */}
      <div className="flex justify-center items-center gap-3 pb-5">
        <Link href="" className="bg-[#1768D0] p-2 rounded-full text-white">
          <RiKeyFill size={22} />
        </Link>
        <Link href="" className="bg-[#1768D0] p-2 rounded-full text-white">
          <IoCardOutline size={22} />
        </Link>
        <Link href="" className="bg-[#1768D0] p-2 rounded-full text-white">
          <MdLocationPin size={22} />
        </Link>
      </div>
      <div className="pl-3 ">
        <p className="text-sm sm:text-sm  md:text-sm  lg:text-sm font-medium  text-gray-500 dark:text-gray-300  flex items-center gap-1">
          <IoMdSync size={20} />
          Sync is on
        </p>
        <Link
          href="#"
          className="text-sm sm:text-sm  md:text-sm  lg:text-sm font-medium  text-gray-500 dark:text-gray-300 py-1  flex items-center gap-1"
        >
          <FaPen size={12} />
          Customise profile
        </Link>
        <Link
          href="#"
          className="text-sm sm:text-sm  md:text-sm  lg:text-sm font-medium  text-gray-500 dark:text-gray-300 flex items-center gap-1 "
        >
          <MdManageAccounts size={20} />
          Manage your account
        </Link>
      </div>
      <p className="w-full h-[2px] bg-[#aecdf4] my-4"></p>
      <div className="pl-3">
        <p className="text-sm sm:text-sm md:text-sm lg:text-sm font-semibold dark:text-gray-200 text-gray-700 ">
          Your Other Profiles
        </p>
        <Link
          href=""
          className="text-sm font-normal text-gray-500 dark:text-gray-300 flex items-center gap-1 pt-2 "
        >
          <FaRegUserCircle /> pd sense
        </Link>
        <Link
          href=""
          className="text-sm font-normal text-gray-500 dark:text-gray-300 flex items-center gap-1 pt-1 "
        >
          <FaRegUserCircle /> Open Guest Profile
        </Link>
      </div>
      <p className="w-full h-[1px] bg-[#aecdf4] my-4"></p>
      <div className="pl-3 pb-5">
        <Link
          href="#"
          className="text-sm font-normal text-gray-500 dark:text-gray-300 flex items-center gap-1 pt-2 "
        >
          <FaRegUserCircle /> Add New Profile
        </Link>
        <button className="text-sm font-semibold text-gray-600 dark:text-gray-200 flex items-center gap-1 pt-1 ">
          <MdLogout size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
