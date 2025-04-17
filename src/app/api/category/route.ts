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

const statuses = ["Pending", "Delivered", "In Progress", "Cancelled"];
const names = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Camera",
  "Monitor",
  "Headphone",
];

// ✅ Generate 50 mock products
const generateCategoryProducts = (count: number): Product[] => {
  const items: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const slug = `${name.toLowerCase().replace(/\s+/g, "-")}-${i}`;

    items.push({
      id: i,
      name,
      img: "/product/product.png", // ✅ String path for JSON response
      slug,
      totalSubCategory: 1 + (i % 6),
      status: statuses[i % statuses.length],
    });
  }

  return items;
};

const categoryProducts = generateCategoryProducts(50); // ✅ 50 mock entries

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = categoryProducts.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(categoryProducts.length / limit),
    totalItems: categoryProducts.length,
  });
}
