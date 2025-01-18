import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center text-white mt-12">Loading...</p>;

  return (
    <div className="min-h-screen  bg-[#272C35] text-white">
      <div className="max-w-4xl mx-auto p-8   ">
        <h1 className="text-4xl font-extrabold my-16  text-gray-200 mb-6 text-center">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-400 mb-4 text-center">
          Author: <span className="text-gray-300">{blog.author}</span> | Published:{" "}
          <span className="text-gray-300">{new Date(blog.createdAt).toLocaleDateString()}</span>
        </p>
        <div className="prose lg:prose-lg prose-invert prose-blue max-w-none leading-relaxed">
          <ReactMarkdown children={blog.content} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
