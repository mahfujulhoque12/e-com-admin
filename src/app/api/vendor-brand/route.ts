import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// ✅ Define the Product interface
interface Product {
  id: number;
  name: string;
  img: string | StaticImageData | string;
  slug: string;
  totalSubCategory: number;
  status: string;
}

// ✅ Predefined options for variety
const names = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Camera",
  "Monitor",
  "Headphone",
];
const statuses = ["Pending", "Delivered", "In Progress", "Cancelled"];

// ✅ Generate 50 mock products
const generateMockProducts = (count: number): Product[] => {
  const products: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const slug = `${name.toLowerCase().replace(/\s+/g, "-")}-${i}`;
    const status = statuses[i % statuses.length];

    products.push({
      id: i,
      name,
      img: "/product/product.png", // ✅ string path (not StaticImageData) for API response
      slug,
      totalSubCategory: 1 + (i % 6),
      status,
    });
  }

  return products;
};

// ✅ Create mock product list
const pCategoryProducts: Product[] = generateMockProducts(50);

// ✅ GET API handler
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
