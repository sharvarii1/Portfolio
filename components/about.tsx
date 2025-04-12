"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  Hello! I'm Sharvari Shivaji Pawar, a final-year 
  <span className="font-medium"> Computer Engineering student </span>
  with a strong foundation in 
  <span className="font-medium"> problem-solving </span> 
  and 
  <span className="font-medium"> computer science fundamentals</span>. 
  I'm 
  <span className="font-medium"> GATE-qualified </span> 
  with a 
  <span className="font-medium"> CGPA of 8.7</span>, 
  and I'm passionate about building impactful solutions using 
  <span className="font-medium"> AI </span> 
  and 
  <span className="font-medium"> backend technologies</span>.
</p>

<p className="mb-3">
  Over time, I've developed skills in 
  <span className="font-medium"> backend development </span> 
  and worked with modern tools like 
  <span className="font-medium"> React.js </span> 
  and 
  <span className="font-medium"> Next.js</span>—this portfolio itself is built using 
  <span className="font-medium"> Next.js</span>!
</p>

<p className="mb-3">
  Alongside web development, I have hands-on experience with 
  <span className="font-medium"> AI/ML</span>, 
  including building and training models for practical applications.
</p>

<p className="mb-3">
  I'm currently exploring the exciting domains of 
  <span className="font-medium"> Generative AI </span> 
  and 
  <span className="font-medium"> Agentic AI development</span>, 
  and I'm constantly looking to expand my knowledge and contribute to impactful tech innovations.
</p>





      {/* <p className="mb-3">
        I graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
