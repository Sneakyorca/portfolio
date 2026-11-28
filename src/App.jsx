import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Faq from "./sections/Faq";
import AiLab from "./sections/AiLab";
import WhatsAppFloat from "./components/whatsapp-float";
import Footer from "./sections/Footer";
import { useReveal } from "./hooks/useReveal";
function App() {
  const revealRef = useReveal();
  return (
    <>
      <Navbar />
      <main ref={revealRef} className="overflow-x-clip">
        <Hero />
        <Work />
        <Services />
        <Process />
        <About />
        <Skills />
        <AiLab />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
