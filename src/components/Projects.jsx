import React from 'react'

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Food Ordering", image: "images/img1.png" },
  { id: 2, title: "E-commerce Website", image: "/images/img4.png" },
  { id: 3, title: "AI-Based Assistant", image: "/images/img2.png" },
  { id: 4, title: "VirtualR Dashboard", image: "/images/img5.png" },
  { id: 5, title: "Construction System", image: "/images/img3.png" },
  { id: 6, title: "Dark Designer Model", image: "/images/img6.png" },
];

export default function Projects() {
  return (
    <section
     id="projects"
     className="text-white py-16 bg-[#1a1f2b] text-center min-h-screen">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Our <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 px-6 md:px-16">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg border border-gray-700"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transform group-hover:scale-110 transition-all duration-500"
            />

            {/* Hover Effect - Transparent Background with Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white  bg-opacity-30 px-4 py-2 rounded-md">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
