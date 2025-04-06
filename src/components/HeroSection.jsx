import React from 'react'
import { motion } from "framer-motion";
import kapilImg from "../assets/kapil.jpg"

export default function HeroSection() {
  return (
    
    <div
     id="home"
     className="min-h-screen flex items-center justify-center bg-[#0a0f1a] px-6">
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-10 text-white">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-300">Hello It's Me</h2>
          <h1 className="text-5xl font-bold text-white mt-2">
            Kapil <span className="text-blue-400">Choudhary</span>
          </h1>
          <h3 className="text-2xl font-semibold mt-2">
            And I'm a <span className="text-blue-400">Frontend Developer</span>
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed">
            As a passionate Frontend Developer, I specialize in building responsive and
            dynamic websites that deliver exceptional user experiences. With a strong
            foundation in HTML, CSS, JavaScript, and React.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 text-2xl cursor-pointer"
              href="#"
            >
              🐦
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 text-2xl cursor-pointer"
              href="#"
            >
              ▶️
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 text-2xl cursor-pointer"
              href="#"
            >
              🔵
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 text-2xl cursor-pointer"
              href="#"
            >
              📷
            </motion.a>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
           <a href='/resume.pdf'> Download CV</a>
          </motion.button>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg relative">
            <img
              src={kapilImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-full h-full rounded-full bg-blue-400 blur-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
