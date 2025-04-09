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


import { IconType } from "react-icons"; // Import IconType
import { FaUser } from "react-icons/fa6";


interface Product {
  id: number;
  icon: IconType; // Change to IconType instead of ReactNode
  title: string;
}

export const ManageData: Product[] = [
  {
    id: 1,
    title: "Business Support & Home",
    icon: LuBriefcaseBusiness,
  },
  {
    id: 2,
    title: "Contact Us",
    icon: LuPhoneCall,
  },
  {
    id: 3,
    title: "Service Areas",
    icon: LuMapPin,
  },
  {
    id: 4,
    title: "My Profile",
    icon: FaUser,
  },
  {
    id: 5,
    title: "My Bookings",
    icon: LuClipboardList,
  },
  {
    id: 6,
    title: "Account Settings",
    icon: LuSettings2,
  },
  {
    id: 7,
    title: "Chat Support",
    icon: LuMessageCircle,
  },
  {
    id: 8,
    title: "Safety Guidelines",
    icon: LuShieldCheck,
  },
  {
    id: 9,
    title: "Payment Methods",
    icon: LuCreditCard,
  },
  {
    id: 10,
    title: "Our Fleet",
    icon: LuTruck,
  },
];
