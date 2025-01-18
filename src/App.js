import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-[#272C35] text-gray-100 min-h-screen">
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            {/* Main page with all sections */}
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Blog page */}
            <Route path="/blog" element={<Blog />} />

            {/* Blog details page */}
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
