import img from "/public/product/payment.png";

import { StaticImageData } from "next/image";

interface Product {
  id: number;
  paymentId: number;
  paymentMethod: string;
  invoice: string;
  payment: string;
  img: string | StaticImageData;
  price: number;
  status: string;

  date: string;
}

export const paymentListData: Product[] = [
  {
    id: 1,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Cancelled",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "unpaid",
  },
  {
    id: 2,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Delivered",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "unpaid",
  },
  {
    id: 3,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "On the way",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "unpaid",
  },
  {
    id: 4,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Pending",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "unpaid",
  },
  {
    id: 5,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Waiting",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "paid",
  },
  {
    id: 6,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Pending",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "paid",
  },
  {
    id: 7,
    paymentId: 287402514554,
    img: img,

    price: 2152,
    status: "Waiting",
    invoice: "3 invoice",

    date: "2025-04-01",
    paymentMethod: "b-kash",
    payment: "paid",
  },
];
