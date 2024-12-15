"use client";

import React, { useRef, useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { LuGraduationCap, LuBriefcase } from "react-icons/lu";
import SectionHeading from "./section-heading";
import { experienceData } from "@/lib/data";
import type { ExperienceItem } from "@/types/experience";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("show-from-top");
    }
  }, []);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-20 sm:mb-34">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Experience</SectionHeading>
        <div className="relative mt-10">
          <div
            className={`absolute left-4 md:left-1/2 w-[4px] h-full ${
              theme === "light" ? "bg-gray-800" : "bg-white"
            }`}
          ></div>
          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              item={item}
              index={index}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  item: ExperienceItem;
  index: number;
  theme: string;
}

function ExperienceItem({ item, index, theme }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const IconComponent =
    item.icon === "graduation" ? LuGraduationCap : LuBriefcase;

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 flex flex-col md:flex-row items-center opacity-0 transition-all duration-500 ease-out translate-y-[-50px]`}
    >
      <div
        className={`w-[300px] lg:w-1/2 ml-20 sm:ml-0 md:w-1/2 ${
          index % 2 === 0
            ? "md:pr-8 md:text-left sm:-ml-5"
            : "md:pl-8 md:ml-auto sm:-mr-7"
        }`}
      >
        <div className={index % 2 === 0 ? "md:float-right" : ""}>
          <div
            className={`p-6 rounded-lg shadow-lg relative ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {item.companyName}
            </h3>
            <p
              className={`text-sm mb-2 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              {item.date} | {item.location}
            </p>
            <p
              className={`text-base ${
                theme === "light" ? "text-gray-700" : "text-gray-200"
              }`}
            >
              {item.description}
            </p>
            <div
              className={`absolute top-1/2 -translate-y-1/2 hidden md:block
                ${
                  index % 2 === 0
                    ? "right-0 md:translate-x-full "
                    : "left-0 -translate-x-full"
                }
              `}
            >
              <div
                className={`w-0 h-0 
                  border-t-[10px] border-b-[10px]
                  border-r-[8px] md:border-l-0
                  ${index % 2 === 0 ? "md:border-l-[8px] md:border-r-0 " : ""}
                  ${
                    theme === "light"
                      ? "border-t-transparent border-b-transparent border-l-gray-800 border-r-gray-800"
                      : "border-t-transparent border-b-transparent border-[#969595] "
                  }
                `}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 sm:-ml-5 -ml-[4px] flex items-center justify-center">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center relative ${
            theme === "light"
              ? "bg-white text-blue-500 border-[4px] border-[#ffffff26] text-base "
              : "bg-gray-800 text-blue-400 border-[2px] border-[#ffffff] text-base "
          } shadow-md`}
        >
          <IconComponent className="w-5 h-5" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:hidden">
            <div
              className={`w-0 h-0 
              border-t-[6px] border-b-[6px]
              border-l-[9px]
              border-t-transparent border-b-transparent
              ${theme === "light" ? "border-l-blue-500" : "border-l-blue-400"}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

