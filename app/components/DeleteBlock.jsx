"use client";

import React from "react";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

function DeleteBlock({ id }) {
  const router = useRouter();

  const deleteTransaction = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Transactions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        router.refresh();
      }

      return res.json();
    } catch (error) {
      console.log("Failed to delete transaction", error);
    }
  };

  return (
    <ArchiveBoxXMarkIcon
      onClick={deleteTransaction}
      className="w-5 h-5 text-red-600"
    />
  );
}

export default DeleteBlock;
