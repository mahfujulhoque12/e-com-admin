// app/api/payment-list/route.ts
import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  paymentId: number;
  paymentMethod: string;
  invoice: string;
  payment: string;
  img: string | StaticImageData | string;
  price: number;
  status: string;
  date: string;
}

const statuses = ["Pending", "Cancelled", "Delivered", "On the way", "Waiting"];
const payments = ["paid", "unpaid"];
const methods = ["b-kash", "nagad", "rocket", "visa"];

function generateMockPayments(count: number): Product[] {
  const mockData: Product[] = [];

  for (let i = 1; i <= count; i++) {
    mockData.push({
      id: i,
      paymentId: 287402514500 + i,
      img: "/product/payment.png", // ✅ converted to string for JSON compatibility
      price: Math.floor(1500 + Math.random() * 1000),
      status: statuses[i % statuses.length],
      invoice: `${Math.ceil(Math.random() * 5)} invoice`,
      date: `2025-04-${((i % 30) + 1).toString().padStart(2, "0")}`,
      paymentMethod: methods[i % methods.length],
      payment: payments[i % payments.length],
    });
  }

  return mockData;
}

const paymentListData = generateMockPayments(50); // generate 50 entries

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = paymentListData.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(paymentListData.length / limit),
    totalItems: paymentListData.length,
  });
}
