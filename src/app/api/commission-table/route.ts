import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

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

const statuses = [
  "On the way",
  "Cancelled",
  "Pending",
  "Delivered",
  "Progress",
];
const stocks = ["In Stock", "Low Inventory", "Out of Stock", "On Demand"];

// ✅ Generate 50 mock product entries
const generateMockCommissionTable = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      name: `Smartphone ${i}`,
      img: "/product/product.png", // ✅ Use string path for image
      sku: `RT12${4578 + i}`,
      slug: `smartphone-${i}`,
      status: statuses[i % statuses.length],
      stock: stocks[i % stocks.length],
      price: 2000 + Math.floor(Math.random() * 1000),
      quantity: 5 + (i % 10),
      category: 1,
    });
  }

  return products;
};

const commissionTable = generateMockCommissionTable(50); // ✅ 50 records

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageParam = parseInt(searchParams.get("page") || "1");
  const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = commissionTable.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(commissionTable.length / limit),
    totalItems: commissionTable.length,
    limit,
  });
}
