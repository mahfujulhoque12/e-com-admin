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

// ✅ Create a large enough mock list
const generateProductList = (count: number): Product[] => {
  const statuses = [
    "On the way",
    "Cancelled",
    "Pending",
    "Delivered",
    "Progress",
  ];
  const stocks = ["In Stock", "Low Inventory", "Out of Stock", "On Demand"];

  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    products.push({
      id: i,
      name: `Smartphone ${i}`,
      img: "/product/product.png", // String for JSON
      slug: `smartphone-${i}`,
      sku: `SKU${1000 + i}`,
      stock: stocks[i % stocks.length],
      price: 2000 + i * 10,
      quantity: 5 + (i % 10),
      category: 1,
      status: statuses[i % statuses.length],
    });
  }

  return products;
};

const sampleProductList: Product[] = generateProductList(50); // generate 35 mock items

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageParam = parseInt(searchParams.get("page") || "1");
  const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;

  const data = sampleProductList.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(sampleProductList.length / limit),
    totalItems: sampleProductList.length,
    limit,
  });
}
