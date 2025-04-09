


import { IconType } from "react-icons"; // Import IconType

import { TbDotsVertical } from "react-icons/tb";

interface Product {
  id: number;
  icon: IconType; // Change to IconType instead of ReactNode
  title: string;
}

export const variationsData: Product[] = [
  {
    id: 1,
    title: "Red",
    icon: TbDotsVertical, 
  },
  {
    id: 2,
    title: "Blue",
    icon: TbDotsVertical, 
  },
  {
    id: 3,
    title: "orange",
    icon: TbDotsVertical, 
  },
  {
    id: 4,
    title: "yellow",
    icon: TbDotsVertical, 
  },
  {
    id: 5,
    title: "pink",
    icon: TbDotsVertical, 
  },
  {
    id: 6,
    title: "black",
    icon: TbDotsVertical, 
  },
];
