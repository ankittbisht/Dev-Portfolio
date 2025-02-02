import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import techxerro from "../src/assets/images/techxerro.png"
import softside from "../src/assets/images/softside.png"
import xponentfunds from "../src/assets/images/xponentfund.png"
import ses from "../src/assets/images/ses.png"
import ph3 from "../src/assets/images/ph3.png"
import varnindesign from "../src/assets/images/varnindesign.png"
import devMate from "../src/assets/images/DevMate.png"
import KhaoPio from "../src/assets/images/KhaoPio.png"
const projects = [
  {
    title: "Techxerro",
    href: "https://techxerro.com",
    dates: "Sep 2024 - Present",
    active: true,
    description:
      "Designed and built the company's official website, TechXerro, from scratch with a focus on performance and user experience. The website includes over 60+ fully optimized pages with consistent 90+ performance scores. Integrated custom animations and loaders to enhance interactivity.",
    technologies: [
      "React.js",
      "MongoDB",
      "ExpressJS",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://techxerro.com",
        icon: <CiGlobe />
      },
    ],
    image: techxerro,

  },
  {
    title: "Strategic Education Solutions",
    href: "https://sesv2.techxerro.site/",
    dates: "Sep 2024 - Oct 2024",
    active: true,
    description:
      "Built Strategic Education Solutions to provide a seamless and engaging experience for users. Focused on performance optimization and interactive animations. Designed custom contact forms and error pages to enhance functionality.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Framer Motion",
      "aos animation",
    ],
    links: [
      {
        type: "Website",
        href: "https://sesv2.techxerro.site/",
        icon: <CiGlobe />
      },
    ],
    image: ses,
  },
  {
    title: "SoftSide",
    href: "https://www.softsidebyhunt.com/",
    dates: "July 2024 - Aug 2024",
    active: true,
    description:
      "Developed Softside, a product-selling website, incorporating robust features like payment integration and product tracking. Integrated Stripe for secure payments and USPS services for seamless order delivery and tracking.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Stripe",
    ],
    links: [
      {
        type: "Website",
        href: "https://www.softsidebyhunt.com/",
        icon: <CiGlobe />
      },
      // {
      //   type: "Source",
      //   href: "https://github.com/magicuidesign/magicui",
      // },
    ],
    image: softside,

  },
  {
    title: "DevMate",
    href: "https://devmatee.netlify.app/",
    dates: "Dec 2024 - Feb 2025",
    active: true,
    description:
      "DevMate is a networking platform for software engineers, enabling swipe-based connections, collaboration, and career growth. It features a dynamic feed, profile customization, and real-time interaction. Built with React, Tailwind, Node.js, and MongoDB, it offers an intuitive and engaging experience for developers to connect and thrive.",
    technologies: [
      "React.js",
      "Redux",
      "MongoDB",
      "ExpressJS",
      "TailwindCSS",
      "Mongoose",
    ],
    links: [
      {
        type: "Website",
        href: "https://devmatee.netlify.app/",
        icon: <CiGlobe />
      },
    ],
    image: devMate,

  },
  

  {
    title: "VarninDesign",
    href: "https://varnindesign.com/",
    dates: "Oct 2024 - Nov 2024",
    active: true,
    description:
      "Created VarninDesign from scratch, focusing on delivering a visually appealing and optimized user experience. Achieved a 90+ performance score by utilizing advanced optimization techniques and implemented custom error pages and a contact form.",
    technologies: [
      "React.js",
      "Vite",
      "Framer motion",
      "TailwindCSS",
    ],
    links: [
      {
        type: "Website",
        href: "https://varnindesign.com/",
        icon: <CiGlobe />
      },

    ],
    image: varnindesign,

  },
  {
    title: "KhaoPio",
    href: "https://khao-pio.netlify.app/",
    dates: "Sep 2024 - Oct 2024",
    active: true,
    description:
      "KhaoPio is a food discovery platform utilizing Swiggy's official API to provide real-time restaurant data. It features Redux for cart management, shimmer UI for smooth loading, and an intuitive browsing experience. Built with React, Tailwind, Node.js, and MongoDB, it ensures seamless food exploration.",
    technologies: [
      "React.js",
      "Redux",
      "TailwindCSS",

    ],
    links: [
      {
        type: "Website",
        href: "https://khao-pio.netlify.app/",
        icon: <CiGlobe />
      },
      // {
      //   type: "Source",
      //   href: "https://github.com/ankittbisht/Khao-Pio",
      // },
    ],
    image: KhaoPio,

  },
  {
    title: "PH3 Security Solutions LLC",
    href: "https://ph3.techxerro.site/",
    dates: "Oct 2024 - Nov 2024",
    active: true,
    description:
      "Developed PH3 Security Solutions LLC with a performance-driven approach, focusing on usability and functionality. Incorporated animations for an engaging interface and ensured consistent optimization across all pages.",
    technologies: [
      "React.js",
      "Vite",
      "aos animation",
      "TailwindCSS",
      "Framer Motion",
    ],
    links: [
      {
        type: "Website",
        href: "https://ph3.techxerro.site/",
        icon: <CiGlobe />
      },
    ],
    image: ph3,
  },
  {
    title: "XponentFunds",
    href: "https://www.xponentfunds.com/",
    dates: "Jul 2024 - Aug 2024",
    active: true,
    description:
      "Developed XponentFunds, a full-stack website designed to sell trading courses. Implemented a seamless course purchasing workflow with PayU payment integration. Ensured a responsive and user-friendly design while maintaining high performance standards.",
    technologies: [
      "React.js",
      "MongoDB",
      "aos animation",
      "TailwindCSS",
      "Express",
      "Nodejs",
      "PayU"
    ],
    links: [
      {
        type: "Website",
        href: "https://www.xponentfunds.com/",
        icon: <CiGlobe />
      },
    ],
    image: xponentfunds,
  },
];

export default projects;
