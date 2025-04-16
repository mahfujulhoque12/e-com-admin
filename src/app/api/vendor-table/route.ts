// app/api/products/route.ts
import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import img from "/public/product/product.png";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData;
  slug: string;
  sku: string;
  stock: string;
  price: number;
  quantity: number;
  category: number;
  status: string;
}

const vendorTable: Product[] = [
  {
    id: 1,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "On the way",
    stock: "On Demand",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 2,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Cancelled",
    stock: "Out of Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 3,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Pending",
    stock: "Low Inventory",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 4,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Delivered",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 5,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 6,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
  {
    id: 7,
    name: "Smartphone",
    img,
    sku: "RT124578",
    slug: "smartphone",
    status: "Progress",
    stock: "In Stock",
    price: 2152,
    quantity: 10,
    category: 1,
  },
];

export async function GET() {
  return NextResponse.json(vendorTable);
}
