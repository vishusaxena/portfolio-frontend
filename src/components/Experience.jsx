import React from "react";
import { motion } from "framer-motion";

// Skills colors map
const skillColors = {
  Python: "#FFD43B",
  TensorFlow: "#FF6F00",
  Docker: "#0DB7ED",
  "Node.js": "#339933",
  Express: "#000",
  MongoDB: "#47A248",
  "React": "#61DAFB",
  "EJS": "#555",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
};

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "InnoByte Services",
    duration: "June 2024 – August 2024",
    description:
      "Contributed to the development of a blog website, focusing on server-side functionality and database management. Implemented RESTful APIs to handle CRUD operations, user authentication, and data management using Node.js, Express.js, and MongoDB.",
    skills: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
  }
  
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Shri Ram Murti Smarak College of Engineering, Technology and Research",
    duration: "August 2021 - June 2025",
    details: "CGPA: 7.50/10",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Radha Madhav Public School",
    duration: "May 2020 - March 2021",
    details: "Percentage: 83.4%",
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Radha Madhav Public School",
    duration: "June 2018 - March 2019",
    details: "Percentage: 87.4%",
  },
];

const Section = ({ title, items, renderItem }) => (
  <section id={title.toLowerCase()} className="py-16" style={{ backgroundColor: "#272c35" }}>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6"
    >
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center">{title}.</h2>
      <div className="space-y-16">{items.map((item, index) => renderItem(item, index))}</div>
    </motion.div>
  </section>
);

const Experience = () => {
  return (
    <>
      <Section
        title="Experience"
        items={experiences}
        renderItem={(exp, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 gap-6 items-start"
          >
            <div className="col-span-3 text-right">
              <p className="text-lg font-medium text-gray-400">{exp.duration}</p>
            </div>
            <div className="col-span-9 rounded-lg" style={{ backgroundColor: "#272c35" }}>
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <div className="border-b border-gray-500 my-4"></div>
              <p className="text-gray-300">{exp.description}</p>
              <div className="mt-4 pt-2">
                <p className="text-sm font-medium text-gray-400">Skills & Technologies:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium rounded-lg"
                      style={{
                        backgroundColor: skillColors[skill] || "#555",
                        color: "#fff",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      />
      <Section
        title="Education"
        items={education}
        renderItem={(edu, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 gap-6 items-start"
          >
            <div className="col-span-3 text-right">
              <p className="text-lg font-medium text-gray-400">{edu.duration}</p>
            </div>
            <div className="col-span-9 rounded-lg" style={{ backgroundColor: "#272c35" }}>
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <p className="text-sm text-gray-400">{edu.institution}</p>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          </motion.div>
        )}
      />
    </>
  );
};

export default Experience;
