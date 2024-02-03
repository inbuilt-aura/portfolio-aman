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
       A full stack developer with {" "}
        <span className="font-medium shadow:sm">almost 2 yrs.</span> of experience. Currently, i am a {" "}  <span className="font-medium">B.Tech C.S.E. final year </span> student
and also working as a <span className="font-medium"> Full Stack Developer at {" "} PESU Venture Labs.</span>{" "}
        <span className="font-medium">My favorite part of programming</span> is the
        problem-solving aspect and to create something new. I love the
        feeling of finally figuring out a solution for a problem. My core stacks are{" "}
        <span className="font-medium">
         Nextjs(React), MERN Stack, Redis,Tailwind CSS and Typescript.
        </span>
         I am also familiar with Postgresql and Prisma. I am always eager to
        learn new technologies and to make current one better.Open for new 
        opportunities.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching science documentateries or anime. I also enjoy{" "}
        <span className="font-medium">making edits and AMVs.</span>
      </p>
    </motion.section>
  );
}
