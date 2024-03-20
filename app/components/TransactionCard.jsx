import { currencyFormatter, dateFormatter } from "@/lib/utils";
import React from "react";

async function TransactionCard({ transaction }) {
  return (
    <section className="border rounded-full px-4 py-1 bg-slate-500">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <div
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: transaction.color }}
          />
          <h1 className="capitalize font-medium">{transaction.description}</h1>
          <small className="">{dateFormatter(transaction.createdAt)}</small>
        </div>
        <div className="flex space-x-2">
          <p className="text-sm">{currencyFormatter(transaction.amount)}</p>
        </div>
      </div>
    </section>
  );
}

export default TransactionCard;
