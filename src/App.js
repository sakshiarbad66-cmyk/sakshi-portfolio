import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience"; // ✅ already added
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section id="home" className="page-section">
          <Home />
        </section>

        <section id="about" className="page-section">
          <About />
        </section>

        <section id="skills" className="page-section">
          <Skills />
        </section>

        {/* ✅ EXPERIENCE SECTION ADDED */}
        <section id="experience" className="page-section">
          <Experience />
        </section>

        <section id="projects" className="page-section">
          <Projects />
        </section>

        <section id="resume" className="page-section">
          <Resume />
        </section>

        <section id="contact" className="page-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;