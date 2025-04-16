import img from "/public/product/customer.png";
import locationImg from "/public/product/location.png";

import { StaticImageData } from "next/image";

interface Product {
  id: number;
  orderNumber: number;
  img: string | StaticImageData;
  price: number;
  status: string;
  customerName: string;
  customerNumber: number;
  date: string;
  email: string;
  location: string;
  totalSpent: number;
  locationImg: string | StaticImageData;
  phoneNumber: number;
  customerBehave: string;
}

export const customerListData: Product[] = [
  {
    id: 1,
    orderNumber: 287402514554,

    locationImg: locationImg,
    price: 2152,
    status: "Active",
 
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    location: "Bangladesh",
    phoneNumber: 1615874586,
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },

];
