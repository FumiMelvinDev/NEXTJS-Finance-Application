import connectDB from "@/lib/mongoDB/connect";
import Transaction from "@/lib/mongoDB/models/transaction";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  return NextResponse.json();
}

export async function POST(req, res) {
  try {
    const body = await req.json();

    const transactionData = body.formData();
    await Transaction.create(transactionData);

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
