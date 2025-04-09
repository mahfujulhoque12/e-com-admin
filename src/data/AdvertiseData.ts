import { IconType } from "react-icons";

import {
  MdAccountBalanceWallet,
  MdAnalytics,
  MdOutlineSecurity,
} from "react-icons/md";
import { FaBullhorn, FaUserCog, FaChartLine } from "react-icons/fa";
import { AiOutlineTeam, AiFillSetting } from "react-icons/ai";
import { RiAdvertisementLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";

interface Product {
  id: number;
  icon: IconType;
  title: string;
}

export const advertiseData: Product[] = [
  {
    id: 1,
    title: "Add Account Setting",
    icon: MdAccountBalanceWallet,
  },
  {
    id: 2,
    title: "Marketing Insights",
    icon: MdAnalytics,
  },
  {
    id: 3,
    title: "Promotions",
    icon: FaBullhorn,
  },
  {
    id: 4,
    title: "User Management",
    icon: AiOutlineTeam,
  },
  {
    id: 5,
    title: "Ad Campaigns",
    icon: RiAdvertisementLine,
  },
  {
    id: 6,
    title: "Advanced Settings",
    icon: AiFillSetting,
  },
  {
    id: 7,
    title: "Performance Analytics",
    icon: FaChartLine,
  },
  {
    id: 8,
    title: "Security Settings",
    icon: MdOutlineSecurity,
  },
  {
    id: 9,
    title: "Admin Controls",
    icon: FaUserCog,
  },
  {
    id: 10,
    title: "Support Center",
    icon: HiOutlineSupport,
  },
];
