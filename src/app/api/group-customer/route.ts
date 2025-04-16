// app/api/customer-groups/route.ts
import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import img from "/public/admin/customer.png"; // ✅ Adjust path if needed

interface Product {
  id: number;
  groupId: number;
  name: string;
  groupColor: string;
  groupDes: string;
  img: string | StaticImageData;
  totalCustomer: number;
  status: "Pending" | "Delivered" | "Cancelled" | "In Progress";
}

const customerGroupData: Product[] = [
  {
    id: 1,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: img,
    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 2,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: img,
    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 3,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "It has survived not only five centuries, but also the leap into electronic typesetting.",
    img: img,
    totalCustomer: 5,
    status: "Pending",
  },
  {
    id: 4,
    groupId: 524052454514,
    groupColor: "yellow",
    name: "Mahfuj",
    groupDes:
      "It was popularised in the 1960s with the release of Letraset sheets.",
    img: img,
    totalCustomer: 5,
    status: "Pending",
  },
];

export async function GET() {
  return NextResponse.json(customerGroupData);
}
