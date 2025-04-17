import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// ✅ Use string paths for JSON-safe API
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

// ✅ Sample arrays to rotate through
const statuses = ["Active", "Inactive"];
const behaves = ["Good Customer", "Bad Customer"];
const names = ["John Doe", "Jane Smith", "Ali Khan", "Emily Rose"];
const locations = ["Bangladesh", "Australia", "USA", "UK", "Canada"];

const generateMockCustomerList = (count: number): Product[] => {
  const list: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const randomName = names[i % names.length];
    const randomLocation = locations[i % locations.length];
    const randomStatus = statuses[i % statuses.length];
    const randomBehavior = behaves[i % behaves.length];

    list.push({
      id: i,
      orderNumber: 287402514500 + i,
      img,
      locationImg,
      price: 1500 + Math.floor(Math.random() * 1000),
      status: randomStatus,
      customerName: randomName,
      customerNumber: 61412340000 + i,
      email: `${randomName.toLowerCase().replace(" ", ".")}@example.com`,
      date: `2025-04-${((i % 30) + 1).toString().padStart(2, "0")}`,
      totalSpent: 5000 + i * 73,
      location: randomLocation,
      phoneNumber: 1615000000 + i,
      customerBehave: randomBehavior,
    });
  }

  return list;
};

const customerListData: Product[] = generateMockCustomerList(50);

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
