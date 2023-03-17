import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  nextjs,
  jobit,
  sass,
  wordpress,
  ailab,
  globalsoft,
  atltech,
  zira,
  anadolu,
  kreditemlak,
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
    title: "React JS",
    icon: web,
  },
  {
    title: "Next JS",
    icon: mobile,
  },
  {
    title: "Wordpress",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React JS & Next JS Developer",
    company_name: "AAILAB",
    icon: ailab,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Next.js.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React JS & Wordpress Developer",
    company_name: "Globalsoft",
    icon: globalsoft,
    iconBg: "#ffffff",
    date: "February 2022 - January 2023",
    points: [
      "Developing and maintaining websites using Wordpress and Next.js.",
      "Supporting projects of companies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "ATL Tech",
    icon: atltech,
    iconBg: "#ffffff",
    date: "July 2021 - September 2021",
    points: ["Supporting projects of companies.", "Learning and writing new methods of coding"],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FC Zira",
    description:
      "This website is Zira Football Club. There are news, gallery, team, calendar and other pages. Users is able to get more information about this team",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "vanilla-js",
        color: "pink-text-gradient",
      },
    ],
    image: zira,
    source_code_link: "https://github.com/",
    link: "https://fczire.az",
  },
  {
    name: "Kredit Əmlak",
    description:
      "This site is related to buying and selling houses. Here you can see ads related to the trade of residential complexes, land, and offices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
    ],
    image: kredit,
    source_code_link: "https://github.com/",
    link: "https://kreditemlak.az/",
  },
  {
    name: "Anadolu Medical Center",
    description: "It is a site about patient admission and hospital.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "elementor",
        color: "green-text-gradient",
      },
    ],
    image: anadolu,
    source_code_link: "",
    link: "https://anadolumedicalcenter.az/",
  },
];

export { services, technologies, experiences, testimonials, projects };
