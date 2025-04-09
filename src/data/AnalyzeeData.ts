import {
  LuBriefcaseBusiness,
  LuClipboardList,
  LuCreditCard,
  LuMapPin,
  LuMessageCircle,
  LuPhoneCall,
  LuSettings2,
  LuShieldCheck,
  LuTruck,
} from "react-icons/lu";

import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa6";

interface Product {
  id: number;
  icon: IconType;
  title: string;
}

export const analyzeeData: Product[] = [
  {
    id: 1,
    title: "Add Reporting",
    icon: LuBriefcaseBusiness,
  },
  {
    id: 2,
    title: "Task Manager",
    icon: LuClipboardList,
  },
  {
    id: 3,
    title: "Payments",
    icon: LuCreditCard,
  },
  {
    id: 4,
    title: "Branch Locations",
    icon: LuMapPin,
  },
  {
    id: 5,
    title: "Customer Chat",
    icon: LuMessageCircle,
  },
  {
    id: 6,
    title: "Support Calls",
    icon: LuPhoneCall,
  },
  {
    id: 7,
    title: "Settings",
    icon: LuSettings2,
  },
  {
    id: 8,
    title: "Security",
    icon: LuShieldCheck,
  },
  {
    id: 9,
    title: "Fleet Tracker",
    icon: LuTruck,
  },
  {
    id: 10,
    title: "User Profiles",
    icon: FaUser,
  },
];
