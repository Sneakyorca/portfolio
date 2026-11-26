import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
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
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
