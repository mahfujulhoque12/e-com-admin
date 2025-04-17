import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  img: string | StaticImageData | string;
  slug: string;
  totalSubCategory: number;
  status: string;
}

const names = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Camera",
  "Monitor",
  "Headphone",
];
const statuses = ["Pending", "Delivered", "In Progress", "Cancelled"];

const generateMockPCategoryProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const status = statuses[i % statuses.length];
    const slug = `${name.toLowerCase()}-${i}`;

    products.push({
      id: i,
      name,
      img: "/product/product.png", // use string for JSON compatibility
      slug,
      totalSubCategory: 1 + (i % 6),
      status,
    });
  }

  return products;
};

const pCategoryProducts: Product[] = generateMockPCategoryProducts(50);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = pCategoryProducts.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(pCategoryProducts.length / limit),
    totalItems: pCategoryProducts.length,
  });
}
