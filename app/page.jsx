import TransactionCard from "./components/TransactionCard";

export default function Home() {
  return (
    <main className="min-h-screen justify-between px-12">
      <TransactionCard />
      <TransactionCard />
      <TransactionCard />
    </main>
  );
}
