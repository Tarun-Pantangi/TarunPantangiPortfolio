import React from "react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section id="resume" className="py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative duration-500 hover:-rotate-0 group [transform:rotate3d(1_,-1,_1,_60deg)] border border-sky-400 border-4 overflow-hidden rounded-2xl relative h-96 w-64 bg-sky-300 p-5 flex flex-col items-start gap-4 text-center"
        >
          <div className="text-gray-50">
            <span className="font-bold text-5xl">Resume</span>
            <p className="text-xs"></p>
          </div>
          <motion.a
            href="https://drive.google.com/file/d/1L3_MqKnAG_68hVi-Wsiyf3cnr8kU05-Y/view"
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:bg-sky-400 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-300 px-6 py-3 rounded-full flex flex-row items-center gap-3"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View
            <svg className="w-6 h-6 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6"/>
            </svg>
          </motion.a>

          <svg className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="5"/>
          </svg>

          <svg className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="2"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
