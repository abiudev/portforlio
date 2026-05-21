export const projects = [
  {
    title: "EzzyPay",
    description:
      "A mobile payment app built with React Native that streamlines M-Pesa STK Push transactions for businesses. The app enables cashier-led payments from individual devices, tracks transaction status in real time, records each payment with the cashier's name for accountability, integrates with the M-Pesa Daraja API, and sends instant confirmations to a shared Telegram channel. The backend is built with Node.js and Express, deployed serverlessly on Vercel, and uses PostgreSQL on Neon for reliable transaction storage.",
    tech: ["React Native", "M-Pesa Daraja API", "Node.js", "Express", "Vercel", "PostgreSQL", "Neon", "Telegram"],
    image: "/ezypay.jpeg",
    link: "https://ezypaylanding.vercel.app",
  },
  {
    title: "ATS Ready",
    description:
      "An AI-powered hiring and recruitment platform built with Next.js, React, and TypeScript to help HR teams, recruiters, and managers create roles, import resumes, rank candidates using AI, and generate interview plans without relying on manual screening. It integrates authentication, database workflows, file uploads, and tools such as Google Drive, Gmail, Outlook, Zoho, and Google Sheets to support a complete hiring workflow.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "AI",
      "Authentication",
      "File Uploads",
      "Google Drive",
      "Gmail",
      "Outlook",
      "Zoho",
    ],
    image: "/ats.jpg",
    link: "https://atsready.pro",
  },
  {
    title: "AjiriFlow",
    description:
      "An AI-powered resume enhancement platform built with Next.js, React, and TypeScript to help job seekers create stronger, ATS-friendly applications. The app allows users to build and optimize resumes, generate tailored cover letters, and improve LinkedIn profiles using AI-powered recommendations, with authentication, payment workflows, document generation, and user entitlement logic for free and premium features.",
    tech: ["Next.js", "React", "TypeScript", "AI", "Authentication", "Payments", "Document Generation"],
    image: "/aj.png",
    link: "https://ajiriflow.com",
  },
  {
    title: "Jobisearch",
    description:
      "A job search application built with React and TypeScript that enables users to search for jobs globally, apply, and track their application statistics on a personalized dashboard. Designed with scalability in mind to handle a high volume of job listings and user queries.",
    tech: ["React", "TypeScript", "Redux", "PostgreSQL", "Vercel"],
    image: "/jobisearch.png",
    link: "https://jobisearch.vercel.app/",
  },
  {
    title: "Podcastify",
    description:
      "A free podcast streaming app built with React, integrating two third-party REST APIs to pull podcast data. The app allows users to listen to episodes without needing to sign up, uses state management for efficient data flow, and features a clean UI built with Material UI and React Router for smooth navigation.",
    tech: ["React", "REST APIs", "Material UI", "React Router", "State Management"],
    image: "/podcastify.png",
    link: "https://podcastify-v0.vercel.app/",
  },
];

  
  import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiJest,
} from "react-icons/si"

export const technologies = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#E8E8F0" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GitHub", icon: FaGithub, color: "#E8E8F0" },
  { name: "Express.js", icon: SiExpress, color: "#E8E8F0" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
]
