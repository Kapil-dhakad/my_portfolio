import React from 'react';
import { motion } from 'framer-motion';
import kapilImg from '../assets/kapil.jpg';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0f1a] px-4 sm:px-6 lg:px-8 py-16 text-white"
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-sm sm:text-base font-medium text-gray-300">
            Hello, It's Me
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Kapil <span className="text-blue-400">Choudhary</span>
          </h1>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
            I'm a{' '}
            <span className="text-blue-400">Frontend Developer</span>
          </h3>

          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
            I specialize in building responsive and dynamic websites that deliver great user experiences. I work with
            HTML, CSS, JavaScript, and React.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start text-2xl">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400">
              🐦
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400">
              ▶️
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400">
              🔵
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400">
              📷
            </motion.a>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start">
            <motion.a
              href="/Kapil.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </motion.a>
          </div>
        </div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg relative">
            <img src={kapilImg} alt="Kapil" className="w-full h-full object-cover" />
          </div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 w-full h-full rounded-full bg-blue-400 blur-lg z-[-1]"
          />
        </motion.div>
      </div>
    </section>
  );
}
