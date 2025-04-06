import React from 'react';
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Show alert
    alert("Message has been sent ✅");

    // Redirect to home section
    window.location.href = "#home"; // Assumes home section has id="home"
  };

  return (
    <section
      id="contact"
      className="py-16 bg-[#1a1f2b] text-white text-center min-h-screen"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Contact <span className="text-blue-400">Me!</span>
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-10 px-6 md:px-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300" />
          <input type="text" placeholder="Last Name" className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300" />
          <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300" />
          <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300" />
        </div>

        <textarea placeholder="Your Message" rows="5" className="w-full p-3 mt-6 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300"></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 cursor-pointer px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
