import React, { useState } from "react";
import { CERTIFICATIONS } from "../constants";  
import { FaExternalLinkAlt } from "react-icons/fa";  
import { motion } from "framer-motion";

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="pt-20" id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Certifications
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-8 p-10"
      >
        {CERTIFICATIONS.map((certification, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="relative block rounded-xl border border-stone-50/30 bg-white/10 p-4 hover:bg-white/20"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center">
              <h3 className="text-2xl font-semibold flex-grow">
                {certification.title}
              </h3>
              {hoveredIndex === index && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="simple-button"
                >
                  <span>View!</span>
                </a>
              )}
            </div>
            <p className="text-xl">{certification.institution}</p>
            <p className="text-sm text-stone-300">{certification.duration}</p>
            <p className="mt-2 text-base">{certification.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;