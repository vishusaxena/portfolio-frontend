import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import useLocation

const Footer = () => {
  return (
    <footer className="py-12 bg-[#272c35]">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 px-6">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-extrabold text-white">
            Vishu Saxena
          </h2>
          <p className="text-gray-300 text-lg">
            MERN Stack Developer | Aspiring DevOps Engineer
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Vishu Saxena. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/vishusaxena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-20 backdrop-blur-md text-white border border-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishusaxena/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-20 backdrop-blur-md text-white border border-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:vishusaxena3105@gmail.com"
              className="p-3 bg-white bg-opacity-20 backdrop-blur-md text-white border border-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-center space-x-8 text-gray-300 font-medium text-lg">
            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-white transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
