import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiKubernetes,
  SiTypescript,
  SiPostgresql,
  SiJenkins,
  SiGraphql,
} from "react-icons/si";

const categories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" />, bgColor: "bg-blue-500" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, bgColor: "bg-yellow-500" },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, bgColor: "bg-blue-600" },
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" />, bgColor: "bg-orange-500" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, bgColor: "bg-teal-500" },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" />, bgColor: "bg-purple-600" },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, bgColor: "bg-green-500" },
      { name: "Express", icon: <SiExpress className="text-gray-600" />, bgColor: "bg-gray-600" },
      { name: "Python", icon: <FaPython className="text-yellow-500" />, bgColor: "bg-yellow-500" },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" />, bgColor: "bg-pink-500" },
    ],
  },
  {
    name: "Databases",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, bgColor: "bg-green-500" },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" />, bgColor: "bg-blue-600" },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" />, bgColor: "bg-blue-500" },
    ],
  },
  {
    name: "DevOps Tools",
    technologies: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" />, bgColor: "bg-blue-500" },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" />, bgColor: "bg-blue-600" },
      { name: "AWS", icon: <FaAws className="text-orange-500" />, bgColor: "bg-orange-500" },
      { name: "Jenkins", icon: <SiJenkins className="text-red-500" />, bgColor: "bg-red-500" },
    ],
  },
  {
    name: "Tools",
    technologies: [
      { name: "Git/GitHub", icon: <FaGitAlt className="text-orange-500" />, bgColor: "bg-orange-500" },
      { name: "VS Code", icon: <FaCode className="text-blue-500" />, bgColor: "bg-blue-500" },
    ],
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: "#272c35" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-white mb-12 text-center">
          <span className=" text-4xl font-extrabold text-white mb-8">
            Skills.
          </span>
        </h2>

        {/* Skill Categories and Technologies */}
        <div className="flex justify-center">
          {/* Categories */}
          <div className="w-full max-w-xs border-r border-gray-600 pr-6">
            <div className="flex flex-col items-center space-y-4">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer text-white font-medium hover:bg-gray-700 rounded-lg px-4 py-2 transition-all w-full text-center ${
                    selectedCategory.name === category.name ? "bg-gray-700" : ""
                  }`}
                >
                  {category.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-col justify-center items-center w-full max-w-3xl pl-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              Technologies in {selectedCategory.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {selectedCategory.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center space-x-3 p-4 rounded-lg shadow-md hover:scale-105 transition-transform ${tech.bgColor} text-white`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
