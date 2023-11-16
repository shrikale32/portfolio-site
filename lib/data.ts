import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import businessCardImg from "@/public/business_card_ner.png";
import sentenceclassifierImg from "@/public/sentence_classifier.png";
import chatwithdocsImg from "@/public/chatwithdocs.png";

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
    title: "Bachelors in Computer Science",
    location: "India",
    description: "I graduated with a degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Assistant System Engineer",
    location: "India",
    description:
      "I joined TCS and worked as a Cyber Security Developer on multiple projects for Fortune 500 clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Advanced Diploma",
    location: "Toronto, Canada",
    description:
      "I graduated with a n Advanced Diploma in Software Engineering Technology with a specialization in Artifical Intelligence",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Student Researcher",
    location: "Toronto, Canada",
    description:
      "I worked on multiple projects as a Full-Stack Developer and Machine Learning Engineer. I worked with technologies such as React, NodeJs, DRF, Python, Tensorflow and others.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Toronto, Canada",
    description:
      "I worked as a Full-Stack Developer to build new product from scratch using React, NextJs, Flask, MySQL, Redis and AWS ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chat With Docs",
    description:
      "Chat with docs allows users to chat with PDF documents. The project allows users to upload PDFs and interact with AI assistant.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Django Rest Framework",
      "AWS S3",
      "Pincecone DB",
      "OpenAI",
    ],
    imageUrl: chatwithdocsImg,
    githubUrl: "https://github.com/shrikale32/chatwithdocs",
  },
  {
    title: "Business Card NER",
    description:
      "A serverless web-based multi-user app to extract information from business card using AWS Machine Learning services.",
    tags: [
      "React",
      "Python",
      "AWS S3",
      "Textract",
      "Comprehend",
      "Cognito",
      "DynamoDB",
    ],
    imageUrl: businessCardImg,
    githubUrl: "https://github.com/shrikale32/Business_Card_NER",
  },
  {
    title: "Abstract Sentence Classifier",
    description:
      "Deep Learning architecture to classify sentences in an abstract into different semantic headings to make it easier to quickly skim through an abstract.",
    tags: ["Python", "Tensorflow", "NLP"],
    imageUrl: sentenceclassifierImg,
    githubUrl: "https://github.com/shrikale32/abstract_sentence_classification",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Django",
  "Flask",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "React Query",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Docker",
] as const;
