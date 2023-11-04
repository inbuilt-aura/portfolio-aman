import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import saas from '../public/saas.png';
import article from '../public/article.png';
import animeverse from '../public/animeverse.png';
import portfolio from '../public/portfolio.png';
import invoice from '@/public/invoice.png';

export const links = [
  {
    name: "Home",
   id: "#home",
  },
  {
    name: "About",
   id: "#about",
  },
  {
    name: "Projects",
   id: "#projects",
  },
  {
    name: "Skills",
   id: "#skills",
  },
  {
    name: "Experience",
   id: "#experience",
  },
  {
    name: "Contact",
   id: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech C.S. final year",
    location: "Gorakhpur",
    description:
      "I currently am in my final year of B.Tech C.S.E. Currently, i am looking for internship in my domain.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  {
    title: "Full-stack develoeper",
    location: "Remote",
    description:
      "Currently started working as a full-stack developer intern at Nyahari. Working on their website and re-designing their website with frontend and backend.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 October - Jan 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer and looking for internship or remote job. My techstack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities and if possible would love to work remotely.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Saas-Genius",
    description:
      "A fully responsive saas application ready to launch your ai business which can acts as chatgpt giving all your responses, code generation, image and video generation.",
    tags: ["Nextjs", "OpenAi", "Replicate Api", "Tailwind CSS", "Redux", "Framer-motion"],
    imageUrl: saas,
    source_code_link: "https://github.com/inbuilt-aura/saas-genius",
    external_link: "https://portfolio-genius.vercel.app/"
  },

  {
    title: "Inovice-app",
    description:
      "A one stop solution for all invoice creation whether you are a businessman or a freelancer.Customize and use as per your requirement.",
    tags: ["React", "Vitejs", "Framer Motion", "Tailwind CSS", "Redux"],
    imageUrl:invoice,
    source_code_link: "https://github.com/inbuilt-aura/invoice-app",
    external_link: "https://invoice-app-99dc9f.spheron.app/"
  }, 
   
  {
    title: "Animeverse",
    description:
      "A conceptual design based on the combination of Anime and Metaverse,the most trendiest topic ongoing.Its a concept to show the visuals,effects and world of Animeverse.",
    tags: [ "Next.js", "Tailwind CSS", "Redux", "Framer-motion"],
    imageUrl: animeverse,
    source_code_link: "https://github.com/inbuilt-aura/Animeverse",
    external_link: "https://animeverse-eight.vercel.app/"
  },

  {
    title: "Ai-Article-Generator",
    description:
      "A Web application which was built for a Dappthon hackathon that enables users to get summary of latest articles which they don't have time to read.",
    tags: ["React", "Vitejs", "RapidApi", "Tailwind CSS", "Redux"],
    imageUrl: article,
    source_code_link: "https://github.com/inbuilt-aura/Ai-Article-Generator",
    external_link: "https://bafybeia4rtnzpjuvoo7chhqwibmko4qgoc7ikq7honrxw7vtlvod26dk2a.ipfs.sphn.link/"
  },

  {
    title: "React-Portfolio",
    description:
      "A modern react portfolio designed fully based on react and its libraries showcasing power of react along with CSS3.",
    tags: ["React", "Css3", "Javascript"],
    imageUrl: portfolio,
    source_code_link: "https://github.com/inbuilt-aura/my-portfolio.git",
    external_link: "https://portfolio-mauve-chi-98.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "MERN Stack",
  "Git",
  "Tailwind",
  "Prisma",
  "Redis",
  "Redux",
  "GraphQL",
  "Shadcian-Ui",
  "Framer Motion"
] as const;
