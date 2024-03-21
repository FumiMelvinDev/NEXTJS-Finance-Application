import Transaction from "@/lib/mongoDB/models/transaction";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Transaction.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error", error });
  }
}
