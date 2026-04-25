import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./ui/ScrollReveal"
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Project />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer/> 

      
    </>
  )
}

export default App;
