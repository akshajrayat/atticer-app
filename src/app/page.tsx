import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GrowingLibrary from "@/components/GrowingLibrary";
import PortfolioGrid from "@/components/PortfolioGrid";
import ChooseProject from "@/components/ChooseProject";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GrowingLibrary />
      <PortfolioGrid />
      <ChooseProject />
      <About />
      <ContactCTA />
      <Footer />
    </main>
  );
}
