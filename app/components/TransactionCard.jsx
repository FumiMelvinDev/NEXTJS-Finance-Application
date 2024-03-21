import { currencyFormatter, dateFormatter } from "@/lib/utils";
import React from "react";
import DeleteBlock from "./DeleteBlock";

async function TransactionCard({ transaction }) {
  return (
    <section className="border rounded-full px-4 py-1 bg-slate-500 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <div
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: transaction.color }}
          />
          <h1 className="uppercase font-medium">{transaction.description}</h1>
          <small className="text-xs pt-1">
            {dateFormatter(transaction.createdAt)}
          </small>
        </div>
        <div className="flex space-x-2">
          <p className="text-sm">{currencyFormatter(transaction.amount)}</p>
          <DeleteBlock id={transaction._id} />
        </div>
      </div>
    </section>
  );
}

export default TransactionCard;
