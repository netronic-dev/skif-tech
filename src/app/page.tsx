import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello world</h1>
      </main>
    </div>
  );
}
