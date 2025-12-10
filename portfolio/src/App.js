import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImagePreloader from "./components/ImagePreloader";
import LoadingState from "./components/LoadingState";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return (
    <BrowserRouter>
      <ImagePreloader />
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ErrorBoundary>
            <Suspense fallback={<LoadingState variant="page" label="Sayfa yükleniyor..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
