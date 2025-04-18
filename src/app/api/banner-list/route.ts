// app/api/banner-list/route.ts
import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import bannerImg from "/public/product/payment.png";

interface Product {
  id: number;
  paymentId: number;
  payment: string;
  status: string;
  date: string;
  startDate: string;
  title: string;
  review: string;
  bannerImg: string | StaticImageData;
}

const bannerListData: Product[] = [
  {
    id: 1,
    paymentId: 287402514554,
    status: "Cancelled",
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "unpaid",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
  },
  {
    id: 2,
    paymentId: 287402514554,
    status: "Delivered",
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "unpaid",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
  },
  {
    id: 3,
    paymentId: 287402514554,
    status: "On the way",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "unpaid",
  },
  {
    id: 4,
    paymentId: 287402514554,
    status: "Pending",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "unpaid",
  },
  {
    id: 5,
    paymentId: 287402514554,
    status: "Waiting",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "paid",
  },
  {
    id: 6,
    paymentId: 287402514554,
    status: "Pending",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "paid",
  },
  {
    id: 7,
    paymentId: 287402514554,
    status: "Waiting",
    title: "Mega Sale - Up to 50% Off!",
    review: "Amazing sound quality and comfortable fit!",
    bannerImg: bannerImg,
    date: "2025-04-01",
    startDate: "2025-03-23",
    payment: "paid",
  },
];

export async function GET() {
  const sanitizedData = bannerListData.map((item) => ({
    ...item,
    bannerImg: "/product/payment.png", // Convert StaticImageData to string path
  }));

  return NextResponse.json(sanitizedData);
}
