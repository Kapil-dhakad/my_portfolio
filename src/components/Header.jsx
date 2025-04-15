import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-[#0a0f1a] text-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold cursor-pointer">
          <span className="text-blue-400">Portfolio.</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 sm:gap-6 text-base sm:text-lg">
          {menuItems.map((item, index) => (
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
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0f1a]/90 backdrop-blur-sm w-full px-6 pb-4 flex flex-col items-center gap-4"
          >
            {menuItems.map((item, index) => (
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
      </AnimatePresence>
    </motion.header>
  );
}
