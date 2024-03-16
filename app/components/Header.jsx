import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Header() {
  const { userId } = auth();

  return (
    <div className="sm:px-12 px-4 py-8 flex justify-between items-center">
      <h1 className="text-2xl cursor-pointer font-semibold">Expense Tracker</h1>
      {userId ? (
        <UserButton />
      ) : (
        <menu className="space-x-4">
          <Link href="/sign-in" className="btn">
            sign in
          </Link>
          <Link href="/sign-up" className="btn">
            sign up
          </Link>
        </menu>
      )}
    </div>
  );
}

export default Header;
