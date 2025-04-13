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
  {
    id: 2,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Active",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    location: "Bangladesh",
    phoneNumber: 1615874586,
    customerBehave: "Bad Customer",
  },
  {
    id: 3,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Active",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    phoneNumber: 1615874586,
    location: "Bangladesh",
    customerBehave: "Good Customer",
  },
  {
    id: 4,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Inactive",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    phoneNumber: 1615874586,
    location: "Bangladesh",
    customerBehave: "Good Customer",
  },
  {
    id: 5,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Inactive",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    phoneNumber: 1615874586,
    location: "Bangladesh",
    customerBehave: "Bad Customer",
  },
  {
    id: 6,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Inactive",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    phoneNumber: 1615874586,
    location: "Bangladesh",
    customerBehave: "Bad Customer",
  },
  {
    id: 7,
    orderNumber: 287402514554,
    img: img,
    locationImg: locationImg,
    price: 2152,
    status: "Inactive",
    customerName: "John Doe",
    customerNumber: 61412345678,
    email: "John.Doe@example.com",
    date: "2025-04-01",
    totalSpent: 8541,
    phoneNumber: 1615874586,
    location: "Bangladesh",
    customerBehave: "Good Customer",
  },
];
