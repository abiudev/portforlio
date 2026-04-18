export const projects = [
  {
    title: "ATSREADY HR",
    description:
      "ATSREADY HR is a recruiter-focused SaaS platform for structured hiring, helping teams create roles, rank candidates, review fit reports, and manage shortlists from one workspace. It combines a premium public landing experience with an authenticated HR workflow for screening, analytics, integrations, and team collaboration.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Supabase",
      "Node.js",
      "PostgreSQL",
    ],
    image: "/ats.jpg",
    link: "https://atshr.vercel.app/hr",
  },
  {
    title: "EzyPay M-Pesa Cashier Terminal",
    description:
      "A premium, localized M-Pesa STK Push payment terminal designed for businesses to manage cashier-led transactions with real-time tracking and notifications.",
    tech: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL", "Vercel"],
    image: "/ezypay.jpeg",
    link: "https://ezypaylanding.vercel.app/#how-it-works",
  },
  {
    title: "Podcastify",
    description:
      "A free podcast streaming app built with React, enabling users to stream any podcast globally without needing to sign up.",
    tech: ["React", "React Router", "Material UI", "Tailwind CSS"],
    image: "/podcastify.png",
    link: "https://podcastify-v0.vercel.app/",
  },
  {
    title: "Jobisearch",
    description:
      "A job search application built with React and TypeScript that allows users to search for jobs worldwide.",
    tech: ["React", "TypeScript", "Shadcn", "Express js", "MongoDB", "Node.js", "Tailwind CSS"],
    image: "/jobisearch.png",
    link: "https://jobisearch.vercel.app/",
  },
  {
    title: "SEO-Friendly Service Website",
    description:
      "Developed an SEO-optimized website for a startup to enhance online visibility and service reach.",
    tech: ["Next.js", "Emailjs", "Tailwind CSS", "Next-Router"],
    image: "/aj.png",
    link: "https://www.ajmedia.co.ke",
  },
  {
    title: "Cat Facts",
    description:
      "A fun React web app designed for cat lovers to view and share interesting cat facts.",
    tech: ["React", "React Router", "Material UI", "Tailwind CSS"],
    image: "/catfacts.png",
    link: "https://random-cat-facts-ten.vercel.app/",
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
