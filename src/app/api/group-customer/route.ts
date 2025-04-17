import { NextRequest, NextResponse } from "next/server";
import { StaticImageData } from "next/image";

// ✅ Use string path for JSON safety
const img = "/public/admin/customer.png";

interface Product {
  id: number;
  groupId: number;
  name: string;
  groupColor: string;
  groupDes: string;
  img: string | StaticImageData | string;
  totalCustomer: number;
  status: "Pending" | "Delivered" | "Cancelled" | "In Progress";
}

// ✅ Variants to rotate through
const names = ["Mahfuj", "Fahim", "Tariq", "Anika", "Sarah"];
const statuses: Product["status"][] = [
  "Pending",
  "Delivered",
  "Cancelled",
  "In Progress",
];
const groupColors = ["red", "blue", "green", "yellow", "purple"];
const sampleDescriptions = [
  "Lorem Ipsum is simply dummy text of the printing industry.",
  "Used since the 1500s in publishing.",
  "Survived the leap into electronic typesetting.",
  "Popularised by Letraset sheets in the 1960s.",
  "Still used in modern typesetting today.",
];

const generateCustomerGroupData = (count: number): Product[] => {
  const groups: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const name = names[i % names.length];
    const status = statuses[i % statuses.length];
    const groupColor = groupColors[i % groupColors.length];
    const groupDes = sampleDescriptions[i % sampleDescriptions.length];

    groups.push({
      id: i,
      groupId: 524052454500 + i,
      name,
      groupColor,
      groupDes,
      img,
      totalCustomer: 3 + (i % 8), // total customers between 3–10
      status,
    });
  }

  return groups;
};

const customerGroupData: Product[] = generateCustomerGroupData(50);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = customerGroupData.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(customerGroupData.length / limit),
    totalItems: customerGroupData.length,
  });
}
