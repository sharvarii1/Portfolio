// import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Road Anomaly Detection",
    description:
      "Developed a road anomaly detection system using YOLOv9 for high-precision object detection and Leaflet for spatial visualization.",
    tags: ["YOLOv9", "Python", "Leaflet", "React.js", "Computer Vision"],
    points: [
      "Used YOLOv9 model for detecting road anomalies like potholes and cracks with high precision.",
      "Visualized detected anomalies on interactive maps using Leaflet.",
      "Built a React.js frontend to display real-time results and mapped coordinates.",
     "Collaborated with mentor A.M. Jagtap and followed an effective project development process from design to deployment."
    ],
    repoLink: "https://github.com/sharvarii1/Pdf_Q-A_chatbot",
  },
  {
    title: "Conversational Q&A Chatbot with PDF",
    description:
      "Built a conversational chatbot that extracts and answers questions from PDF documents using LLMs and LangChain.",
    tags: ["LangChain", "LLM", "Ollama", "VectorStore", "LangServe", "NLP"],
    points: [
      "Developed a Q&A chatbot capable of understanding and responding to queries based on PDF content.",
      "Integrated LangChain and Ollama-powered LLMs for natural language understanding.",
      "Implemented vector-based document retrieval for accurate context-aware answers.",
      "Deployed the solution using LangServe for efficient and scalable access."
    ],
    repoLink: "https://github.com/sharvarii1/Potholes-Mapping",
  },
  {
    title: "Employee Churn Prediction",
  description:
    "Developed a machine learning system to predict employee churn using best practices in feature engineering and classification with Artificial Neural Networks (ANN).",
  tags: ["TensorFlow", "ANN", "Machine Learning", "Feature Engineering", "Streamlit"],
  points: [
    "Performed data preprocessing and feature engineering to enhance model accuracy.",
    "Built a classification model using Artificial Neural Networks (ANN) with TensorFlow.",
    "Trained the model to predict whether a employee will stay or leave based on historical data.",
    "Deployed the model using Streamlit for interactive and user-friendly access."
    ],
    repoLink: "https://github.com/sharvarii1/Company_churn_analysis",
  },
  
] ;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;
