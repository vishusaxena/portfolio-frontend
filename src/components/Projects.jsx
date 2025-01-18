import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [likes, setLikes] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/vishusaxena/repos");
        const data = await response.json();
        setProjects(data);
        // Initialize likes count for each project
        const initialLikes = data.reduce((acc, project) => {
          acc[project.id] = false; // false means not liked
          return acc;
        }, {});
        setLikes(initialLikes);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    };

    fetchProjects();
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleLike = (projectId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: !prevLikes[projectId], // Toggle the like state
    }));
  };

  return (
    <section id="projects" className="py-16" style={{ backgroundColor: "#272c35" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl font-extrabold text-white mb-8">Projects.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative  border border-gray-200 backdrop-blur-md p-6 rounded-lg shadow-md flex flex-col justify-between h-64"
            >
              <h3 className="text-2xl font-bold text-white flex items-center mb-2">
                📂 {project.name}
              </h3>
              <p className="text-gray-300 text-sm flex-grow">{project.description || "No description available"}</p>
              <p className="text-sm font-semibold text-gray-300 mt-4">
                Language: <span className="text-blue-400">{project.language || "Unknown"}</span>
              </p>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => toggleLike(project.id)}
                  className={`flex items-center px-3 py-1 text-sm rounded transition ${
                    likes[project.id]
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  👍 {likes[project.id] ? "Liked" : "Like"}
                </button>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold flex items-center hover:underline"
                >
                  View on GitHub
                  <span className="ml-2">➡️</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded transition ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-white/10 text-gray-300 border border-gray-300 hover:bg-white/20"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
