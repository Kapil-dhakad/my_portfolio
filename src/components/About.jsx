
import { motion } from "framer-motion";
import React, { useState } from "react";
import kapilImg from "../assets/kapil.jpg"


export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 bg-[#1a1f2b] text-white min-h-screen"
    >
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={kapilImg} // Replace with your actual image URL or path
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-transparent"
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-400 opacity-80 animate-pulse"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 md:mt-0 md:ml-12 max-w-2xl"
      >
        <h2 className="text-4xl font-bold">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-lg mt-4 leading-relaxed">
          I am a dedicated and results-driven Frontend Developer with a passion
          for creating seamless and engaging user experiences. With expertise in{" "}
          <strong>HTML, CSS, JavaScript, React, and Vue.js</strong>, I focus on
          crafting responsive and visually appealing websites.
        </p>

        {/* Extra Text (conditionally shown) */}
        {showMore && (
          <p className="text-lg mt-4 leading-relaxed text-gray-300">
            I enjoy turning complex problems into simple, beautiful, and
            intuitive designs. I’m always exploring new technologies and
            continuously improving my skills. Currently, I am expanding my
            knowledge in backend development using Node.js and MongoDB.
          </p>
        )}

        {/* Button to toggle extra text */}
        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 cursor-pointer inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-400 transition-all"
        >
          {showMore ? "See less" : "See more"}
        </motion.button>
      </motion.div>
    </section>
  );
}
