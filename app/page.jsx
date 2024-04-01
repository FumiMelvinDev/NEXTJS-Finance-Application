import AddTransaction from "./components/AddTransaction";
import TransactionCard from "./components/TransactionCard";

const getTransactions = async () => {
  try {
    const res = await fetch(process.env.API_URL + "/api/Transactions", {
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
            {transactions.length > 0 ? (
              <>
                {transactions?.map((transaction) => (
                  <TransactionCard
                    key={transaction._id}
                    transaction={transaction}
                  />
                ))}
              </>
            ) : (
              <h2>No recent transactions</h2>
            )}
          </div>
        </div>
        <div className="">stats</div>
      </div>
    </main>
  );
}
