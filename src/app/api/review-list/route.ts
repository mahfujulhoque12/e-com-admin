import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// ✅ Use string path for JSON response
const img = "/product/customer.png";

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
  img: string | StaticImageData | string;
  customerName: string;
}

const statuses = ["Cancelled", "Delivered", "On the way", "Pending", "Waiting"];
const payments = ["paid", "unpaid"];
const behaviors = ["Good Customer", "Bad Customer"];
const names = ["John Doe", "Jane Smith", "Ali Khan", "Liam Gray", "Sophia Lee"];
const reviews = [
  "Amazing sound quality and comfortable fit!",
  "Very helpful customer service.",
  "Fast delivery, but packaging could be better.",
  "The product exceeded my expectations!",
  "Will definitely order again.",
];
const products = [
  "Chips, Coke, Cookies",
  "T-shirt, Jacket",
  "Book, Pen",
  "Mouse, Keyboard",
  "Shoes, Hat",
];

const generateMockReviewList = (count: number): Product[] => {
  const reviewsList: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const customerName = names[i % names.length];
    const behavior = behaviors[i % behaviors.length];
    const status = statuses[i % statuses.length];
    const payment = payments[i % payments.length];
    const reviewText = reviews[i % reviews.length];
    const productText = products[i % products.length];
    const rating = 3 + (i % 3); // Ratings between 3 to 5

    reviewsList.push({
      id: i,
      paymentId: 287402514500 + i,
      status,
      date: `2025-04-${((i % 30) + 1).toString().padStart(2, "0")}`,
      payment,
      product: productText,
      rating,
      review: reviewText,
      customerBehave: behavior,
      customerName,
      img,
    });
  }

  return reviewsList;
};

const reviewListData: Product[] = generateMockReviewList(50);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = reviewListData.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(reviewListData.length / limit),
    totalItems: reviewListData.length,
  });
}
