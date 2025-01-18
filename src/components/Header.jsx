import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Header = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/"; // Check if the current route is the homepage

  return (
    <header className="bg-[rgba(39,44,53,0.8)] backdrop-blur-md rounded-lg py-4 px-6 shadow-lg border border-[rgba(255,255,255,0.1)] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-4xl w-[90%]">
      <div className="flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-light-900 text-2xl font-mono font-bold">vishu.</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          {/* Use anchor links for the homepage */}
          {isHomePage ? (
            <>
              <a
                href="#about"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                Contact
              </a>
            </>
          ) : (
            <>
              {/* Use Link for page-based navigation */}
              <Link
                to="/"
                className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
              >
                Home
              </Link>
            </>
          )}
          {/* Blog navigation */}
          <Link
            to="/blog"
            className="text-light-900 text-sm font-mono hover:text-green-400 transition-colors duration-300"
          >
            Blog
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-3">
          <a
            href="https://github.com/vishusaxena"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full shadow hover:bg-light-900 transition-all duration-300"
          >
            <FaGithub size={20} className="text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishusaxena/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full shadow hover:bg-light-900 transition-all duration-300"
          >
            <FaLinkedin size={20} className="text-gray-300" />
          </a>
          <a
            href="mailto:vishusaxena3105@gmail.com"
            className="bg-[rgba(255,255,255,0.1)] p-2 rounded-full shadow hover:bg-light-900 transition-all duration-300"
          >
            <FaEnvelope size={20} className="text-gray-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
