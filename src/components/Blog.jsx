import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20  bg-[#272C35]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-white mb-12 my-6">All Blogs</h2>
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="> Search blogs..."
            className="w-full px-4 py-3 bg-[#1F1F28] text-white border border-gray-500 rounded-lg shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
            <motion.div
              key={blog._id}
              initial={{ scale: 0.9 }}
              whileHover={{
                scale: 1.05,
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
              }}
              className=" border-2 border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-white text-left">
                {blog.title}
              </h3>
              <div className="text-gray-400 text-sm mt-2 text-left">
                By {blog.author} - {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <p className="text-gray-300 mt-4 text-left">
                {blog.content.substring(0, 100)}...
              </p>
              <button
                onClick={() => navigate(`/blog/${blog._id}`)}
                className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
