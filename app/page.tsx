import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
