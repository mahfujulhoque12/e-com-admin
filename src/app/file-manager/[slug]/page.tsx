// app/file-manager/[slug]/page.tsx

import { fileMangerData } from "@/data/FileManagerData";
import { Metadata } from "next";

// Define PageProps with params as a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate Static Params
export async function generateStaticParams() {
  return fileMangerData.map((product) => ({
    slug: product.slug,
  }));
}

// Generate Metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params; // Await the params Promise
  return {
    title: `Share file: ${slug}`,
  };
}

// Page Component
export default async function Page({ params }: PageProps) {
  const { slug } = await params; // Await the params Promise
  return <div>share file: {slug}</div>;
}
