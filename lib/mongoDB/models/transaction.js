import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      defaultValue: "Expense",
    },
    color: {
      type: String,
      defaultValue: "#E94F37",
    },
  },
  {
    timestamps: true,
  }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.models("Transaction", transactionSchema);

export default Transaction;
