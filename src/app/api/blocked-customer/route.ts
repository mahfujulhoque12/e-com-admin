import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// Use string paths for safe JSON responses
const img = "/product/customer.png";
const locationImg = "/product/location.png";

interface Product {
  id: number;
  orderNumber: number;
  img: string | StaticImageData;
  price: number;
  status: string;
  customerName: string;
  customerNumber: number;
  date: string;
  email: string;
  location: string;
  totalSpent: number;
  locationImg: string | StaticImageData;
  phoneNumber: number;
  customerBehave: string;
}

const statuses = ["Active", "Inactive"];
const behaves = ["Good Customer", "Bad Customer"];
const names = ["John Doe", "Jane Smith", "Ali Khan", "Emily Rose", "Tom Hardy"];
const locations = ["Bangladesh", "Australia", "USA", "UK", "Canada"];

const generateMockCustomers = (count: number): Product[] => {
  const customers: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const location = locations[i % locations.length];
    const status = statuses[i % statuses.length];
    const behavior = behaves[i % behaves.length];

    customers.push({
      id: i,
      orderNumber: 287402514000 + i,
      img,
      locationImg,
      price: 1500 + Math.floor(Math.random() * 1000),
      status,
      customerName: name,
      customerNumber: 61412340000 + i,
      email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
      date: `2025-04-${((i % 30) + 1).toString().padStart(2, "0")}`,
      totalSpent: 5000 + i * 85,
      location,
      phoneNumber: 1615000000 + i,
      customerBehave: behavior,
    });
  }

  return customers;
};

const customerListData: Product[] = generateMockCustomers(50);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = customerListData.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(customerListData.length / limit),
    totalItems: customerListData.length,
  });
}
