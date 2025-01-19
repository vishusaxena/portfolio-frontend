import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xv2olwx",
        "template_7okw4za",
        formData,
        "wu2BV5rsdi_GR27M9"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#272c35] text-white"
    >
      <div className="container flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Sidebar - Social Icons */}
        <div className="flex flex-col items-center p-6  rounded-lg">
          
          <div className="flex flex-col items-center space-y-6">
            {[
              { icon: FaLinkedin, link: "https://linkedin.com/vishusaxena" },
              { icon: FaGithub, link: "https://github.com/vishusaxena" },
              { icon: FaEnvelope, link: "mailto:vishusaxena3105@gmail.com" },
              { icon: FaInstagram, link: "https://instagram.com/ichvishu" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg  "
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full max-w-xl p-8 rounded-lg  bg-[#272c35]">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                className="w-full p-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
            <p className="mb-6">
              Thank you for reaching out. I will get back to you soon.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
