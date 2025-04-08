import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaBullhorn } from "react-icons/fa";

// Initial service data
const initialServices = [
  {
    icon: <FaPaintBrush size={40} className="text-blue-400" />,
    title: "UI-UX Designer",
    description:
      "UI/UX design refers to the process of designing user interfaces (UI) and improving user experiences (UX) for digital products.",
    moreText:
      "It involves wireframes, user flows, interactive prototypes, and ensuring usability and accessibility.",
  },
  {
    icon: <FaCode size={40} className="text-blue-400" />,
    title: "Web Development",
    description:
      "Building modern, responsive, and user-friendly websites using the latest web technologies like React, Node.js, and more.",
    moreText:
      "Specializing in SPA (Single Page Applications), backend integration, and optimized frontend performance.",
  },
  {
    icon: <FaBullhorn size={40} className="text-blue-400" />,
    title: "Deployment Services",
    description:
      "Our Website Deployment Services include: GitHub Pages for static websites Vercel / Netlify for React or JAMstack apps.",
    moreText:
      "We also help with custom domains, CI/CD pipelines, and serverless backend configurations.",
  },
];

export default function Services() {
  const [services, setServices] = useState(
    initialServices.map((service) => ({ ...service, showMore: false }))
  );

  const toggleShowMore = (index) => {
    const updated = [...services];
    updated[index].showMore = !updated[index].showMore;
    setServices(updated);
  };

  return (
    <section
      id="services"
      className="text-white py-16 bg-[#1a1f2b] text-center min-h-screen px-4 sm:px-6 md:px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold"
      >
        Our <span className="text-blue-400">Services</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 sm:p-8 bg-[#242b38] rounded-2xl shadow-md border border-gray-700 hover:shadow-blue-400/50 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {service.description}
              </p>

              {service.showMore && (
                <p className="text-gray-400 text-sm sm:text-base mt-3">
                  {service.moreText}
                </p>
              )}
            </div>

            <motion.button
              onClick={() => toggleShowMore(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-blue-400 transition-all"
            >
              {service.showMore ? "Read less" : "Read more"}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
