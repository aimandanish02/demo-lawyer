import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust-strip/TrustStrip";
import { PracticeAreas } from "@/components/practice-areas/PracticeAreas";
import { About } from "@/components/about/About";
import { Results } from "@/components/results/Results";
import { Process } from "@/components/process/Process";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <PracticeAreas />
        <About />
        <Results />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
