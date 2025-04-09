// app/api/variations/route.ts
import { NextResponse } from "next/server";

// This will act as an in-memory DB (for demo only)
const variations: { color: string }[] = [];

export async function GET() {
  return NextResponse.json({ variations });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { color } = body;

  if (!color) {
    return NextResponse.json({ error: "Color is required" }, { status: 400 });
  }

  const newVariation = { color };
  variations.push(newVariation);
  return NextResponse.json({ message: "Variation added", variation: newVariation });
}
