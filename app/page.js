import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Work from "@/components/Work";
import About from "@/components/About";
import Craft from "@/components/Craft";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <About />
        <Craft />
        <Contact />
      </main>
    </>
  );
}
