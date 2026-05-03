import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CursorGlow from "./components/CursorGlow";
import ParticleField from "./components/ParticleField";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Software from "./components/Software";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Section-level cross-fade on enter
    const sections = document.querySelectorAll("section[id]");
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("section-fade");
            sio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sections.forEach((s) => sio.observe(s));

    return () => {
      io.disconnect();
      sio.disconnect();
    };
  }, []);

  return (
    <div className="relative film-grain letterbox">
      <CursorGlow />
      <ParticleField />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Software />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
