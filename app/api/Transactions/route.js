import { connectToDB } from "@/lib/mongoDB/connect";
import Transaction from "@/lib/mongoDB/models/transaction";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToDB();
    const body = await req.json();

    const transactionData = body.formData;
    await Transaction.create(transactionData);

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const transactions = await Transaction.find();

    return NextResponse.json({ transactions }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
