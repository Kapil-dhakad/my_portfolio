import React from 'react'

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-[#0a0f1a] text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl cursor-pointer font-bold">
          <span className="text-blue-400">Portfolio.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg">
          {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, color: "#38bdf8" }}
              className="cursor-pointer transition-all duration-300"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-[#0a0f1a] p-4 flex flex-col items-center gap-4 md:hidden"
          >
            {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                className="text-lg text-white hover:text-blue-400 transition-all duration-300"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
