import React from "react";
import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import { FaFileDownload, FaBlog } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-8 mt-16 rounded-lg bg-opacity-90"
      >
        {/* Main Heading with Typewriter Effect */}
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500 mb-6">
          <Typed
            strings={[
              "Hi 👋, I  Vishu Saxena",
              "Hi 👋, I  Vishu Saxena and I am a Fullstack Developer",
              "Hi 👋, I  Vishu Saxena and I am a Competitive Programmer",
              "Hi 👋, I  Vishu Saxena and I am Learning DevOps",
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </h2>

        {/* About Section Content */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 text-left">
          I am a passionate{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            MERN Stack Developer
          </strong>{" "}
          and aspiring{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            DevOps Engineer
          </strong>
          . I have experience building scalable and efficient web applications
          using modern technologies like React, Node.js, and MongoDB. With a
          keen interest in cloud computing and containerization, I aim to
          deliver impactful solutions.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed text-left mb-8">
          I am currently pursuing  B.Tech in Computer Science and Engineering
          from Shri Ram Murti Smarak College of Engineering, Technology, and
          Research, with a GPA of 7.54/10. I enjoy solving coding challenges and
          participating in hackathons.
        </p>

        {/* Buttons */}
        <div className="flex justify-start space-x-6">
          <a
            href="./VISHUSAXENA_CV.docx" // Replace with your resume link
            download
            className="flex items-center space-x-2 bg-teal-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-teal-600 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] transition-all duration-300"
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>
          <a
            href="/blog" // Replace with your blog section or external link
            className="flex items-center space-x-2 bg-purple-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-purple-600 hover:shadow-[0_0_10px_2px_rgba(138,43,226,0.8)] transition-all duration-300"
          >
            <FaBlog />
            <span>Read Blogs</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
