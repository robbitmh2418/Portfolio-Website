import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  figma,
  meta,
  ibm,
  google,
  coursera,
  carrent,  
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Editing",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Data Analyst ",
    company_name: "IBM",
    icon: ibm,
    iconBg: "#95BDFF",
    date: " 10 April 2023 - 25 April 2023",
    points: [
      "Upon successful completion of this program, you’ll have analyzed real-world datasets, created interactive dashboards, and presented reports to share your findings, giving you the confidence and the portfolio to begin a career as an associate or junior data analyst.",
      "You’ll also build the foundation for other data disciplines such as data science or data engineering.",
    ],
  },
  {
    title: "UX Design",
    company_name: "GOOGLE",
    icon: google,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Define the field of UX and explain why it’s important for consumers and businesses.",
       "Understand foundational concepts in UX design, such as user-centered design, the design process, accessibility, and equity-focused design",
      "Identify the factors that contribute to great user experience design.",
       "Review common job responsibilities of entry-level UX designers and teams that they work with.",
      "Explore job opportunities and career paths within the field of user experience.",  
      "Explain why design sprints are an important and useful part of a UX designer’s work.",
    ],
  },
  {
    title: "Java Programming and Software Engineering Fundamentals",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
     "One of the most in-demand programming languages and the foundation of the Android operating system.",
      "Designed for beginners, this Specialization will teach you core programming concepts and equip you to write programs to solve complex problems.", 
      "In addition, you will gain the foundational skills a software engineer needs to solve real-world problems, from designing algorithms to testing and debugging your programs.",
    ],
  },
  {
    title: "Programming with JavaScript",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "JavaScript is the programming language that powers the modern web.",
       "In this course, you will learn the basic concepts of web development with JavaScript.",
       "You will work with functions, objects, arrays, variables, data types, the HTML DOM, and much more.",
        "You will learn how to use JavaScript and discover interactive possibilities with modern JavaScript technologies. Finally, you will learn about the practice of testing code and how to write a unit test using Jest."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sujash Banerjee",
    designation: "Web Developer",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
