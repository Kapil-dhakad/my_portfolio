import { motion } from "framer-motion";
import React, { useState } from "react";
import kapilImg from "../assets/kapil.jpg";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-16 py-16 bg-[#1a1f2b] text-white min-h-screen"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative mb-10 lg:mb-0"
      >
        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
          <img
            src={kapilImg}
            alt="Kapil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-400 blur-md z-[-1]"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center lg:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          I am a dedicated and results-driven Frontend Developer with a passion
          for creating seamless and engaging user experiences. With expertise in{" "}
          <strong>HTML, CSS, JavaScript, React, and Vue.js</strong>, I focus on
          crafting responsive and visually appealing websites.
        </p>

        {showMore && (
          <p className="text-base sm:text-lg mt-4 text-gray-400 leading-relaxed">
            I enjoy turning complex problems into simple, beautiful, and intuitive
            designs. I’m always exploring new technologies and improving my skills.
            Currently, I’m expanding my knowledge in backend development using
            Node.js and MongoDB.
          </p>
        )}

        <motion.button
          onClick={() => setShowMore(!showMore)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white text-base sm:text-lg font-medium rounded-full shadow-lg hover:bg-blue-400 transition-all"
        >
          {showMore ? "See less" : "See more"}
        </motion.button>
      </motion.div>
    </section>
  );
}
