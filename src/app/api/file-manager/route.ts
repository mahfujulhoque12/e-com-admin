// app/api/file-list/route.ts
import { NextResponse } from "next/server";
import { StaticImageData } from "next/image";
import img from "/public/admin/customer.png"; 

interface Product {
  id: number;
  fileName: string;
  fileSize: string;
  author: string;
  owner: string;
  lastModify: string;
  members: string[] | StaticImageData[];
}

const fileListData: Product[] = [
  {
    id: 1,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img, img],
  },
  {
    id: 2,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img],
  },
  {
    id: 3,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img, img],
  },
  {
    id: 4,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img],
  },
  {
    id: 5,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img, img],
  },
  {
    id: 6,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img],
  },
  {
    id: 7,
    fileName: "App Design & Development",
    author: "by Andrio",
    lastModify: "Jan 03, 2020",
    fileSize: "185 MB",
    owner: "Danielle Thompson",
    members: [img, img, img, img],
  },
];

export async function GET() {
  // ⚠️ You can't send image objects (StaticImageData) directly in JSON
  // Let's convert image objects to URL strings
  const data = fileListData.map((file) => ({
    ...file,
    members: (file.members as StaticImageData[]).map(() => "/admin/customer.png"),
  }));

  return NextResponse.json(data);
}
