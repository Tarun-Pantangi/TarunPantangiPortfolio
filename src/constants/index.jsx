import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaAws,
  FaJs,
  FaJava,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb ,SiAngular,SiPhp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; 
import { TbBrandLeetcode  , TbBrandCpp} from "react-icons/tb"; 
import { SiMysql } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" }, 
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },  
  { label: "Contact", href: "#contact" },
  { label: "Resume", href:"#resume"},
];


export const HERO = {
  name: "Tarun Pantangi",
  greet: "Hello there! 👋🏻",
  description:
    "I am a computer science student passionate about solving real-world problems through innovative software solutions. I enjoy tackling complex challenges and turning ideas into practical, effective applications.",
};

export const PROJECTS = [
  {
    id: 1,
    name: (
      <span className="text-red-800 font-extrabold text-2xl">
        Research Paper Inventory
      </span>
    ),
    description: (
      <span className="text-red-800 font-extrabold text-xl">
        Developed a user-friendly web application for filtering and accessing research papers
      </span>
    ),
    image: projectImage1,
    githubLink: "https://github.com/Tarun-Pantangi/ResearchPaper_Inventory",
  },
  {
    id: 2,
    name: (
      <span className="text-red-800 font-extrabold text-2xl">
        MCQs Generator using NLP 
      </span>
    ),
    description: (
      <span className="text-red-800 font-extrabold text-xl">
        A sophisticated tool using Natural Language Processing (NLP) to automatically generate multiple-choice questions (MCQs) from text. It simplifies quiz creation by extracting key concepts and formulating relevant questions and answer choices.
      </span>
    ),
    image: projectImage2,
    githubLink: "https://github.com/Tarun-Pantangi/MCQ_QuestionGenerator",
  },
  {
    id: 3,
    name: (
      <span className="text-red-800 font-extrabold text-2xl">
        HangMan Game using JAVA
      </span>
    ),
    description: (
      <span className="text-red-800 font-extrabold text-xl">
        Developed a Java-based Hangman game where players guess a hidden word before running out of attempts. Utilized Java's random library for word selection and Visual Studio Code for development.
      </span>
    ),
    image: projectImage3,
    githubLink: "https://github.com/Tarun-Pantangi/HangMan",
  },
  
];




export const SKILLS = [
  {
    icon: <FaJava className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Java",
    experience: "3+years",
  },
  {
    icon: <FaPython className="text-4xl text-yellow-600 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  
  {
    icon: <TbBrandCpp className="text-4xl text-green-400 lg:text-5xl" />,
    name: "C++",
    experience: "2+ years",
  },
  {
    icon: <FaJs className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "MySQL",
    experience: "2+ years",
  },
  {
    icon: <SiPhp className="text-4xl text-blue-700 lg:text-5xl" />,
    name: "PHP",
    experience: "1.5+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React.js",
    experience: "1+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <SiAngular className="text-4xl text-red-700 lg:text-5xl" />,
    name: "Angular",
    experience: "1.5+ year",
  },
  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <FaAws className="text-4xl text-orange-700 lg:text-5xl" />,
    name: "Amazon Web Services",
    experience: "2+ year",
  },



];

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Indian National Centre for Ocean Information Services (INCOIS)",
    duration: "August 2023 - October 2023",
    description:
      "As an intern at INCOIS, I developed a user-friendly web application tailored for scientists to filter and access research papers efficiently. Utilizing Angular for front-end development, PHP for server-side scripting, and MySQL for database management, I created a robust and interactive platform. I used JavaScript for dynamic features and Visual Studio Code for development, contributing to a tool that enhances researchers' ability to manage and retrieve scientific documents seamlessly.",
  },
  {
    title: "Cloud Engineering Intern",
    company: "Wissen Infotech",
    duration: "November 2023 - December 2023",
    description:
      "As a Cloud Engineering Intern, I developed a serverless website utilizing AWS services including Amplify, Cognito, API Gateway, Lambda, DynamoDB, and CodeCommit. I also deployed a high-availability website using Elastic Beanstalk, Amazon S3, and EC2. My role involved leveraging various AWS tools to ensure scalable, secure, and reliable cloud solutions, gaining hands-on experience in cloud infrastructure and deployment.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vellore Institute of Technology, Vellore",
    duration: "2021-2025",
    description:
      "Currently pursuing a B.Tech with a CGPA of 9.23. Engaged in various projects related to frontend development, algorithms, and data structures. Enthusiastic about AWS and machine learning, actively exploring and applying these technologies in academic and personal projects.",
  },
  {
    degree: "Intermediate or Higher Secondary Education",
    institution: "Gyanavapi Junior College",
    duration: "2019 - 2021",
    description:
      "Achieved 97% in Higher Secondary Education, with a major in Mathematics, Physics, and Chemistry (MPC)",
  },
  {
    degree: "High School",
    institution: "Velocity High School",
    duration: "2019",
    description:
      "Achieved a GPA of 9.8/10 in 10th grade",
  },
];
export const CERTIFICATIONS = [
  {
    title: (
      <span>
         <FaAws className="inline-block text-4xl mr-2" />
        Certified Solutions Architect Associate
      </span>
    ),
    institution: "Amazon Web Services",
    duration: "July 2024 - July 2027",
    link: "https://drive.google.com/file/d/1doEcMkDbJvwA91fQv7VwSpcScfQiXlaD/view?usp=drive_link",
    description:
      "Certified Scrum Master (CSM) certification demonstrates proficiency in Scrum methodology, focusing on agile project management and team collaboration.",
  },
  {
    title: (
      <span>
         <RiReactjsLine className="inline-block text-4xl mr-2" />
         React Basics
      </span>
    ),
    institution: "META",
    duration: "2024",
    link: "https://drive.google.com/file/d/1N0LwG5qmT18t2eCrtjuc8otBfhUrvgtq/view?usp=drive_link",
    description:
      "Successfully completed the React Basics course with a score of 95%. This certification validates a solid understanding of fundamental React concepts and practices.",
  },
  {
    title: (
      <span>
         <RiReactjsLine className="inline-block text-4xl mr-2" />
         Advanced React 
      </span>
    ),
    institution: "META",
    duration: "2024",
    link: "https://drive.google.com/file/d/1KfGpdxC8hWtHFUyUIbZMWoxSpOO1KLqZ/view?usp=drive_link",
    description:
      "Successfully completed the Advanced React course with a score of 86.3%. This certification demonstrates advanced knowledge and skills in React, covering complex concepts and techniques for building robust applications.",
  },
  {
    title: (
      <span>
        <SiExpress className="inline-block text-3xl mr-2" />{" "}
        <FaNodeJs className="inline-block text-3xl mr-2" />
         Developing Back-End Apps with Node.js and Express
      </span>
    ),
    institution: "IBM",
    duration: "2024",
    link: "https://drive.google.com/file/d/1WgwnhC31PnxsSd2tCbGpjbwENARlTxe3/view?usp=drive_link",
    description:
      "Completed the Developing Back-End Apps with Node.js and Express course with a score of 91.66%. This certification validates proficiency in creating scalable and efficient back-end applications using Node.js and Express.",
  },
  {
    title: (
      <span>
        <FaNodeJs className="inline-block text-3xl mr-2" />
        <SiMongodb className="inline-block text-2xl mr-2" />{" "}
        Node.js & MongoDB: Developing Back-end Database Applications
      </span>
    ),
    institution: "IBM",
    duration: "2024",
    link: "https://drive.google.com/file/d/1TTsZF2eUIOnzmvciQw2dvq-QI3GgTmsq/view?usp=drive_link",
    description:
      "Achieved a score of 94% in the Node.js & MongoDB: Developing Back-end Database Applications course. This certification demonstrates expertise in building back-end applications with Node.js and integrating MongoDB for database management.",
  },

];
export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://leetcode.com/Tarun_Pantangi",
    icon: <TbBrandLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/tarun.pantangi/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Tarun-Pantangi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/tarun-pantangi-133966220/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
