"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl font-mono">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeInOut"
              }}
              className={`p-6 rounded-lg mb-6 border ${
                theme === 'light' 
                  ? 'bg-white border-gray-200' 
                  : 'bg-gray-800 border-gray-600'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`text-2xl ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {'>_ '}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{item.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{item.location}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.date}</p>
                </div>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                {item.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <span className="text-gray-600 dark:text-gray-400">$</span>
                    <span className="text-gray-800 dark:text-gray-200">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
