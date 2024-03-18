import connectDB from "@/lib/mongoDB/connect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  return NextResponse.json();
}

export async function POST(req, res) {
  try {
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
