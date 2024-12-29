import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import techxerro from "../src/assets/images/techxerro.png"
import softside from "../src/assets/images/softside.png"
import xponentfunds from "../src/assets/images/xponentfund.png"
import ses from "../src/assets/images/ses.png"
import ph3 from "../src/assets/images/ph3.png"
import varnindesign from "../src/assets/images/varnindesign.png"

const projects = [
  {
    title: "Techxerro",
    href: "https://techxerro.com",
    dates: "Jan 2024 - Feb 2024",
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
    title: "SoftSide",
    href: "https://www.softsidebyhunt.com/",
    dates: "June 2023 - Present",
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
    title: "VarninDesign",
    href: "https://varnindesign.com/",
    dates: "April 2023 - September 2023",
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
    title: "Strategic Education Solutions",
    href: "https://sesv2.techxerro.site/",
    dates: "April 2023 - March 2024",
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
    title: "PH3 Security Solutions LLC",
    href: "https://ph3.techxerro.site/",
    dates: "April 2023 - March 2024",
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
    dates: "April 2023 - March 2024",
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
