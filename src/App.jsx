// import { useState } from "react";
import Header from "../src/components/Header";
import Hearo from "../src/components/Hearo";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import WhatIDo from "./components/WhatIDo";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Portfolio";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hearo />
        <About />
        <Skills />
        <WhatIDo />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
