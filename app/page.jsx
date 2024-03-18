import AddTransaction from "./components/AddTransaction";
import TransactionCard from "./components/TransactionCard";

export default function Home() {
  return (
    <main className="min-h-screen justify-between px-10 sm:px-28 mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="">
          <AddTransaction />
          <TransactionCard />
          <TransactionCard />
        </div>
        <div className="">stats</div>
      </div>
    </main>
  );
}
