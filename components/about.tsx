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
        <span className="font-medium">1+ yrs.</span> of experience. Currently, i am a {" "}  <span className="font-medium">B.Tech C.S.E. final year </span> student
who is looking for internship or remote job  in my own domain.{" "}
        <span className="font-medium">My favorite part of programming</span> is the
        problem-solving aspect and to learn something new. I <span className="underline">love</span> the
        feeling of finally figuring out a solution for a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js,MongoDB and Tailwind CSS.
        </span>
        . I am also familiar with TypeScript and Prisma. I am always eager to
        learn new technologies,Currently looking for a{" "}
        <span className="font-medium">full-time/ intern in-office/remote position</span> as a full stack developer cuz i believe that real-time experience does matter and only you can help me in that.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching science documentateries or anime. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. 
      </p>
    </motion.section>
  );
}
