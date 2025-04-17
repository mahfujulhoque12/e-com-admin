import { NextRequest, NextResponse } from "next/server";

// ✅ Use string path for JSON compatibility
const img = "/admin/customer.png";

interface Product {
  id: number;
  fileName: string;
  fileSize: string;
  author: string;
  owner: string;
  lastModify: string;
  members: string[];
}

// ✅ Sample values to rotate
const authors = ["by Andrio", "by Sarah", "by Tom", "by Lena"];
const owners = [
  "Danielle Thompson",
  "Michael Clark",
  "Sophia Lee",
  "James Miller",
];
const fileNames = [
  "App Design & Development",
  "Marketing Strategy Report",
  "UX Research Notes",
  "Client Presentation",
  "Financial Breakdown",
  "SEO Report",
];
const fileSizes = ["124 MB", "85 MB", "200 MB", "45 MB", "185 MB", "320 MB"];
const dates = [
  "Jan 03, 2020",
  "Feb 10, 2021",
  "Mar 15, 2022",
  "Apr 01, 2023",
  "Dec 22, 2024",
];

const generateMockFileList = (count: number): Product[] => {
  const files: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const membersCount = 2 + (i % 4); // 2 to 5 members
    const members = Array.from({ length: membersCount }, () => img);

    files.push({
      id: i,
      fileName: fileNames[i % fileNames.length],
      author: authors[i % authors.length],
      lastModify: dates[i % dates.length],
      fileSize: fileSizes[i % fileSizes.length],
      owner: owners[i % owners.length],
      members,
    });
  }

  return files;
};

const fileListData: Product[] = generateMockFileList(50);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 5;

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = fileListData.slice(start, end);

  return NextResponse.json({
    data,
    currentPage: page,
    totalPages: Math.ceil(fileListData.length / limit),
    totalItems: fileListData.length,
  });
}
