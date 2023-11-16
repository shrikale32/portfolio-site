"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
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
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        After graduating with a{" "}
        <span className="font-medium">Bachelors in Computer Science</span>, 
        I joined Tata Consultancy Services with kickstarted my professional journey. 
        During my time at TCS, I garnered valuable experience through involvement in cybersecurity projects. 
        This experience not only provided insights into working with large organizations but also honed my programming skills, 
        making them relevant and practical. However, after a year and a half, I decided to pursue further studies to delve deeper 
        into my passion, which lies at the intersection of full-stack development and artificial intelligence. 
        This prompted me to enroll in the {" "}
        <span className="font-medium">Software Engineering Technology</span> program at Centennial College, specializing in {" "}
        <span className="font-medium">Artificial Intelligence</span>. Throughout this period, I seized the opportunity to work on 
        multiple projects aligned with my passion. Post-graduation, I embarked on a journey with Fleetmetrica as a {" "}
        <span className="font-medium">Fullstack Developer</span>. Here, I spearheaded the development of a cutting-edge flagship product, 
        gaining a profound understanding of the holistic process involved in bringing a product to life and making it globally accessible. 
      </p>

      <p>
       My favorite part of programming is the {" "}
       <span>s the problem-solving aspect</span>. I love the feeling of finally figuring out a solution to a problem.
       I am always looking to learn new technologies. I am currently looking for a full-time position as a {" "}
       <span className="font-medium underline">Full-Stack or Backend Developer.</span>
      </p>
    </motion.section>
  );
}
