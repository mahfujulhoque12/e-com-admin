import img from "/public/product/customer.png";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  orderNumber: number;
  img: string | StaticImageData;
  price: number;
  status: string;
  customerName: string;
  customerNumber: number;
  product: string;
  date: string;
  d7: number;
}

export const orderListData: Product[] = [
  {
    id: 1,
    orderNumber: 287402514554,
    img: img,
    price: 2152,
    status: "On the way",
    customerName: "John Doe",
    customerNumber: 61412345678,
    product: "Luxury Sedan, poteto",
    date: "2025-04-01",
    d7: +105,
  },
  {
    id: 2,
    orderNumber: 287402514555,
    img: img,
    price: 1890,
    status: "Delivered",
    customerName: "Emma Smith",
    customerNumber: 61498765432,
    product: "Stretch Limousine, tomato",
    date: "2025-04-02",
    d7: -54,
  },
  {
    id: 3,
    orderNumber: 287402514556,
    img: img,
    price: 3200,
    status: "Pending",
    customerName: "Liam Brown",
    customerNumber: 61455667788,
    product: "Hummer H2,tomato",
    date: "2025-04-03",
    d7: -10,
  },
  {
    id: 4,
    orderNumber: 287402514557,
    img: img,
    price: 1460,
    status: "Cancelled",
    customerName: "Olivia Johnson",
    customerNumber: 61433445566,
    product: "SUV,tomato,carot",
    date: "2025-04-04",
    d7: +108,
  },
  {
    id: 5,
    orderNumber: 287402514558,
    img: img,
    price: 2250,
    status: "Delivered",
    customerName: "Noah Wilson",
    customerNumber: 61477889900,
    product: "Chrysler 300C,tomato",
    date: "2025-04-05",
    d7: +108,
  },
  {
    id: 6,
    orderNumber: 287402514559,
    img: img,
    price: 1780,
    status: "On the way",
    customerName: "Ava Taylor",
    customerNumber: 61411223344,
    product: "Luxury Van,tomato",
    date: "2025-04-06",
    d7: +108,
  },
  {
    id: 7,
    orderNumber: 287402514560,
    img: img,
    price: 2400,
    status: "Pending",
    customerName: "Ethan Martin",
    customerNumber: 61466554433,
    product: "Executive Sedan,tomato",
    date: "2025-04-07",
    d7: +108,
  },
];
