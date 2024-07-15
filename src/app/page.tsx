import Filter from "@/components/main-page/Filter";
import Hero from "@/components/main-page/Hero";
import Offers from "@/components/main-page/Offers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Filter />
      <Offers />
    </main>
  );
}
