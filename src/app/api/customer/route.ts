// src/app/api/customers/route.ts

import { NextResponse } from "next/server";
import img from "/public/product/customer.png";
import { StaticImageData } from "next/image";

export interface Customer {
  name: string;
  email: string;
  img: string | StaticImageData;
}

const mockCustomers: Customer[] = [
  { name: "Badon", email: "badon@gmail.com", img: img },
  { name: "Joy", email: "joy@gmail.com", img: img },
  { name: "Alif", email: "alif@gmail.com", img: img },
  { name: "Nirob", email: "nirob@gmail.com", img: img },
  { name: "Safi", email: "safi@gmail.com", img: img },
  { name: "Sadin", email: "sadin@gmail.com", img: img },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const filtered = mockCustomers.filter((customer) =>
    customer.name.toLowerCase().includes(search)
  );

  return NextResponse.json(filtered, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
