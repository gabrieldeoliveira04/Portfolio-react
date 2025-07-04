import Header from "@/components/header";
import Home from "@/components/home";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contacts";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
      <About />
      <Footer />
    </>
  );
}
