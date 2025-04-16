// app/api/sample-products/route.ts
import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import img from "/public/product/product.png";
interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  totalSubCategory: number;
  status: string;
}

const categoryProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    img: img,
    slug: "smartphone",
    totalSubCategory: 5,
    status: "Pending",
  },
  {
    id: 2,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "Delivered",
  },
  {
    id: 3,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "In Progress",
  },
  {
    id: 4,
    name: "Laptop",
    img: img,
    slug: "laptop",
    totalSubCategory: 3,
    status: "Cancelled",
  },
];

export async function GET() {
  return NextResponse.json(categoryProducts);
}
