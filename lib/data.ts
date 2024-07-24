import { title } from "process";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Student Software Developer",
    location: "Coimbatore, Tamilnadu",
    description:
      "I'm currently pursuing Computer Science. Do multiple weekend projects and develop my skills",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2025",
  },
  {
    title: "Student Intern",
    location: "Coimbatore, Tamilnadu",
    description:
      "I participated and assisted in real time projects and developed my skills",
    icon: React.createElement(CgWorkAlt),
    date: "2023-2023",
  }
] as const;

export const projectsData = [

  {
    title: "Comment-Analyser-HN",
    description:
      "This Application give context of the comments from Hacker News Posts from URL.",
    tags: ["Next.js", "Cloudflare", "Hono", "Wrangler", "Tailwind", "Typescript"],
    // imageUrl: caption,
    projectLink: 'https://comment-analyser-hn.vercel.app/',
    githubLink: 'https://github.com/Jaiharan/Comment-Analyser-HN',
  },
  {
    title: "InaMinute Blog App",
    description:
      "Blog website with CRUD operations using MERN stack Tech & Tools.",
    tags: ["Node.js", "Express.js", "API", "MongoDB", "React", "Javascript"],
    // imageUrl: discord,
    projectLink: '',
    githubLink: 'https://github.com/Jaiharan/Blog-frontend',
  },
  {
    title: "Object-Detection",
    description:
      "This Application detects objects from video stream using tensorflow. ",
    tags: ["Next.js", "Tailwind", "tensorflow", "Webcam", "object detection", "Javascript"],
    // imageUrl: ecomImg,
    projectLink: '',
    githubLink: 'https://github.com/Jaiharan/object-detection',
  },
  {
    title: "VideoCall App",
    description:
      "This Application is a Video Call Web App using WebRTC. ",
    tags: ["React.js", "Tailwind", "Webrtc", "socket.io", "Javascript", "Node.js"],
    // imageUrl: landingPage,
    projectLink: '',
    githubLink: 'https://github.com/Jaiharan/VideoCall_App',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Cloudflare",
  "Vercel",
  "Headless UI",
  "Express",
  "PostgreSQL",
  "Python",
  "Open Source",
  "Framer Motion",
] as const;