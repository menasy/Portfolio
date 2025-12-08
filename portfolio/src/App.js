import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImagePreloader from "./components/ImagePreloader";

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <BrowserRouter>
      <ImagePreloader />
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
