import Image from "next/image";
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import About from "../components/about";
import Industries from "../components/industries";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      <Hero />
      <About />
      <Industries />
      <Footer />
    </div>
  );
}
