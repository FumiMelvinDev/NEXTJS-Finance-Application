import Transaction from "@/lib/mongoDB/models/transaction";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("first request");
  try {
    const body = await req.json();

    const transactionData = body.formData;
    await Transaction.create(transactionData);

    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
