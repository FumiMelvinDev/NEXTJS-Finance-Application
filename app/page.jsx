import AddTransaction from "./components/AddTransaction";
import TransactionCard from "./components/TransactionCard";

const getTransactions = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Transactions", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to fetch transactions", error);
  }
};

export default async function Home() {
  const { transactions } = await getTransactions();

  return (
    <main className="min-h-screen justify-between px-10 md:px-52 mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="">
          <AddTransaction />
          <div className="space-y-3 py-4">
            {transactions.map((transaction) => (
              <TransactionCard
                key={transaction._id}
                transaction={transaction}
              />
            ))}
          </div>
        </div>
        <div className="">stats</div>
      </div>
    </main>
  );
}
