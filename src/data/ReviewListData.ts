import img from "/public/product/customer.png";
import { StaticImageData } from "next/image";
interface Product {
  id: number;
  paymentId: number;

  payment: string;

  status: string;

  date: string;
  product: string;
  rating: number;
  review: string;
  customerBehave: string;
  img: string | StaticImageData;
  customerName: string;
}

export const reviewListData: Product[] = [
  {
    id: 1,
    paymentId: 287402514554,

    status: "Cancelled",

    date: "2025-04-01",

    payment: "unpaid",
    product: "Chips, Coke, Cookies",
    rating: 4,
    review: "Amazing sound quality and comfortable fit!",
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 2,
    paymentId: 287402514554,

    status: "Delivered",

    date: "2025-04-01",

    payment: "unpaid",
    product: "Chips, Coke, Cookies",
    rating: 3,
    review: "Amazing sound quality and comfortable fit!",
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 3,
    paymentId: 287402514554,

    status: "On the way",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "unpaid",
    customerBehave: "Bad Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 4,
    paymentId: 287402514554,

    status: "Pending",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "unpaid",
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 5,
    paymentId: 287402514554,

    status: "Waiting",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 6,
    paymentId: 287402514554,

    status: "Pending",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
    customerBehave: "Bad Customer",
    customerName: "John Doe",
    img: img,
  },
  {
    id: 7,
    paymentId: 287402514554,

    status: "Waiting",
    product: "Chips, Coke, Cookies",
    rating: 5,
    review: "Amazing sound quality and comfortable fit!",

    date: "2025-04-01",

    payment: "paid",
    customerBehave: "Good Customer",
    customerName: "John Doe",
    img: img,
  },
];
