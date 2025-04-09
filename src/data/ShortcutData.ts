import { LuBuilding } from "react-icons/lu";
import { BsFillHouseAddFill } from "react-icons/bs";


import { IconType } from "react-icons"; // Import IconType
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

interface Product {
  id: number;
  icon: IconType; // Change to IconType instead of ReactNode
  title: string;
}

export const shortcutData: Product[] = [
  {
    id: 1,
    title: "Add Photo",
    icon: BsFillHouseAddFill, 
  },
  {
    id: 2,
    title: "Billing and Payments",
    icon: LuBuilding, 
  },
  {
    id: 3,
    title: "Audience",
    icon: FaPeopleGroup, 
  },
  {
    id: 4,
    title: "Busniess & Setting",
    icon: IoSettingsOutline, 
  },
  {
    id: 5,
    title: "Event Manager",
    icon: MdOutlineEmojiEvents, 
  },
  {
    id: 6,
    title: "Commerce Manager",
    icon: FiShoppingCart, 
  },
];
