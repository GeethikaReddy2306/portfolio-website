import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      
      <Projects />
      <Certificates />
      <CodingProfiles />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
