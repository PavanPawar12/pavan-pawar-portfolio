import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App;
