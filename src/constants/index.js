import {
    mobile,
    backend,
    datascience,
    cp,
    amazon,
    codechefnitj,
    android,
    qt,
    whatsappconnect,
    foodfusion,
    sudokusolver,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    o9,
    resumevalidator
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Competitive Programmer",
      icon: cp,
    },
    {
      title: "Data Science Enthusiast",
      icon: datascience,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Android",
      icon: android,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Qt",
      icon: qt,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "R&D Intern",
      company_name: "o9 Solutions",
      icon: o9,
      iconBg: "#ffffff",
      date: "Jan 2024 - Current",
      points: [
        "Working with the monitoring team to create multiple scripts and automations that improve the overall workflow of the org and reduce the scope of manual errors.",
        "Used – Python, ELK, Ansible, Kubernetes, Docker, Cloud Computing",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#ffffff",
      date: "May 2023 - July 2023",
      points: [
        "Worked on building various components of the tool that provides data storage and debugging capabilities for Just Walk Out Stores",
        "Used – React.js, Redux, Java, Python, AWS Services (Athena, Glue, S3, Lambda, Secrets Manager, Step Function, API Gateway, DynamoDB)",
        "Accompanied and helped mentors on numerous customer calls and presentations.",
      ],
    },
    {
      title: "Problem Setter",
      company_name: "Codechef NITJ Chapter",
      icon: codechefnitj,
      iconBg: "#ffffff",
      date: "Sept 2021 - Mar 2023",
      points: [
        "Created problems of different difficulty levels for various online contests to be held on Codechef along with editorials.",
        "Managed and lead group of problem setters to successfully host contests.",
        "Used - Competitive programming and Problem solving concepts"
      ],
    },
  ];
  
  const projects = [
    {
      name: "Resume Validator",
      description:
        "This is a web-based application that enables users to upload multiple resumes, perform queries, and utilize a comparator to rank resumes against job descriptions based on matching skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI APIs",
          color: "orange-text-gradient"
        }
      ],
      image: resumevalidator,
      source_code_link: "https://github.com/coutaditya/resume-validator-frontend/",
    },
    {
      name: "Whatsapp Connect",
      description:
        "This is a web-based application that streamlines the initiation initiation of WhatsApp conversation, eliminating the need to add a contact’s number to the user’s phone contact list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: whatsappconnect,
      source_code_link: "https://github.com/coutaditya/Whatsapp-Connect/",
    },
    {
      name: "Sudoku Solver",
      description:
        "This is an application that inputs an unsolved 9X9 sudoku from the user and outputs the solution.",
      tags: [
        {
          name: "Qt",
          color: "blue-text-gradient",
        },
        {
          name: "Backtracking",
          color: "green-text-gradient",
        },
        {
          name: "c++",
          color: "pink-text-gradient",
        },
      ],
      image: sudokusolver,
      source_code_link: "https://github.com/coutaditya/Sudoku-Solver",
    },
  ];
  
  export { services, technologies, experiences, projects };