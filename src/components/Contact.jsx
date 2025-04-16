import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create WhatsApp message
    const text = `Hi Kapil,%0AMy name is ${formData.firstName} ${formData.lastName}.%0AMobile: ${formData.mobile}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/7999942756?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 bg-[#1a1f2b] text-white text-center min-h-screen px-4 sm:px-6 md:px-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold"
      >
        Contact <span className="text-blue-400">Me!</span>
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
          className="w-full p-3 mt-6 bg-gray-800 text-white border border-gray-600 rounded-lg resize-none"
          required
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
