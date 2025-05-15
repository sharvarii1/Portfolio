import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Development Intern",
    location: "Vivid Mynd (Remote)",
    description: [
      "Built and optimized responsive UI components using Next.js for enhanced user experience",
      "Worked with PostgreSQL and Supabase to design and manage scalable backend services",
      "Implemented a Retrieval-Augmented Generation (RAG) data ingestion pipeline for client-specific use cases",
      "Collaborated with a cross-functional team to deliver production-ready features under tight deadlines"
    ],
    icon: React.createElement(FaReact),
    date: "May 2025 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Document Q&A Chatbot",
    description: 
      "Built an intelligent document question-answering system using LlamaIndex for RAG implementation and ChromaDB for vector storage.",
    tags: ["LlamaIndex", "ChromaDB", "Streamlit", "Groq API", "HuggingFace"],
    points: [
      "Implemented LlamaIndex for efficient document ingestion and retrieval augmented generation (RAG)",
      "Created persistent vector storage using ChromaDB for scalable semantic search",
      "Developed an interactive Streamlit frontend for user-friendly document queries",
      "Integrated Groq's high-performance LLM API for rapid response generation",
      "Utilized HuggingFace embeddings for accurate document representation and retrieval"
    ],
    repoLink: "https://github.com/sharvarii1/LLama_index_pdf_Q-A",
},
  
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
    repoLink: "https://github.com/sharvarii1/Potholes-Mapping",
  },
  {
    title: "PetSoft – Pet Day Care Management System",
    description:
      "Developed a user-friendly application to streamline pet day care operations, integrating modern web technologies and secure payment processing.",
    tags: ["Next.js", "Prisma", "Stripe", "TypeScript", "NextAuth", "Zod"],
    points: [
      "Built a responsive web application for managing pet details and owner records.",
      "Integrated secure payment handling through Stripe for seamless transactions.",
      "Implemented authentication and authorization using NextAuth.",
      "Used Prisma ORM for efficient database interactions and schema management.",
      "Ensured robust input validation using Zod for safe and consistent user input handling."
    ],
    repoLink: "https://github.com/sharvarii1/PetSoft", 
  }
  
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
