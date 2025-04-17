import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// ✅ Product interface
interface Product {
  id: number;
  name: string;
  img: string | StaticImageData | string;
  slug: string;
  sku: string;
  stock: string;
  price: number;
  quantity: number;
  category: number;
  status: string;
}

// ✅ Statuses and Stock for variety
const statuses = [
  "On the way",
  "Cancelled",
  "Pending",
  "Delivered",
  "Progress",
];
const stocks = ["In Stock", "Low Inventory", "Out of Stock", "On Demand"];

// ✅ Generate 50 mock products
const generateVendorTable = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      name: `Smartphone ${i}`,
      img: "/product/product.png", // using string for JSON safety
      slug: `smartphone-${i}`,
      sku: `RT1245${78 + i}`,
      status: statuses[i % statuses.length],
      stock: stocks[i % stocks.length],
      price: 2000 + Math.floor(Math.random() * 500),
      quantity: 5 + (i % 10),
      category: 1,
    });
  }

  return products;
};

const vendorTable = generateVendorTable(50); // ✅ 50 entries

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = vendorTable.slice(start, end);
  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(vendorTable.length / limit),
    totalItems: vendorTable.length,
  });
}
