"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const categorizedSkills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  AI_ML: ["Tensorflow", "NLP", "LLMs", "Object-detection","YOLO"],
  Frontend: ["React.js", "Next.js", "TailwindCSS", "HTML", "CSS"],
  Backend: ["Express.js", "Node.js", "Prisma"],
  Databases: ["MongoDB", "PostgreSQL","Sqlite"],
  DevOps: ["Git", "GitHub", "AWS"],
  SoftSkills: ["Communication", "Structured Thinking", "Problem-Solving"],
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
        {Object.entries(categorizedSkills).map(([category, skills], i) => (
          <div
            key={category}
            className="rounded-xl border border-gray-300 dark:border-white/10 p-4 bg-gray-100 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold mb-2 text-teal-500">{category.replace("_", "/")}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  className="bg-white borderBlack rounded-xl px-3 py-1.5 text-sm dark:bg-white/10 dark:text-white/80"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

