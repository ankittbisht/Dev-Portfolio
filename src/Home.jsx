import React, { useRef, useState, useEffect } from "react";
import LetterPullup from "./components/magicui/letter-pullup";
import { easeIn, motion } from "framer-motion";
import dp from "./assets/dp.jpg";
import dp1 from "./assets/dp-photoaidcom-cropped.jpg";
import techs from "./Skills";
import projects from "./Projects";
import ProjectCard from "./Homecomponent/ProjectCard";
import GridPattern from "./components/magicui/animated-grid-pattern";
import BlurFade from "./components/magicui/blur-fade";
import Marquee from "./components/magicui/marquee";
import CertificationSection from "./Homecomponent/Certifications";

import techxerro from "./assets/svg/Techxerro.svg";
import nietlogo from "./assets/svg/niet.svg";
import Vbblogo from "./assets/svg/Vbbs.svg";
import { Helmet } from "react-helmet";

const BLUR_FADE_DELAY = 0.04;
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hover: {
    y: -10, // Upward motion (bounce effect)
    scale: 1.05,
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
    transition: { type: "spring", stiffness: 600 },
  },
};

function Home() {
  const experience = [
    {
      id: 1,
      Company: "TechXerro",
      title: "FullStack Developer",
      date: "April 2024 - Present",
      logo: techxerro,
    },
  ];


  return (
    <div className="relative">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ankit Bisht",
            "url": "https://ankittbisht.vercel.app/",
            "image": "https://ankittbisht.vercel.app/assets/dp-photoaidcom-cropped-sfEs2t5x.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/ankittbisht/",
              "https://github.com/ankittbisht"
            ],
            "jobTitle": "Full Stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance / Independent"
            },
            "knowsAbout": ["Full Stack Development", "MERN Stack", "Java", "Web Development"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Delhi",
              "addressRegion": "Delhi",
              "addressCountry": "India"
            }
          }
          `}
        </script>
      </Helmet>
      {/* GridPattern positioned inside Home */}
      <GridPattern
        numSquares={100}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className="absolute  inset-x-0 inset-y-[-10%] skew-y-12 -z-10 h-[105%]"
      // style={{ height: homeHeight }} // Apply dynamic height here
      />

      <div className="max-w-4xl mx-auto min-h-screen py-12 sm:py-24 px-6 space-y-10">
        {/* <DockDemo /> */}
        <div className="mx-auto max-w-4xl w-full space-y-8">
          <section className="Intro flex-col md:flex-row flex gap-2 justify-between items-center">
            <div className="flex-col flex flex-1 order-last md:order-first">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="flex  font-bold items-center text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none whitespace-nowrap font-Monabold text-center md:text-start">
                  Namaste, i'm
                  <LetterPullup
                    words="Ankit"
                    delay={0.05}
                    className="text-3xl tracking-tighter sm:text-5xl xl:text-6xl/none"
                  />
                  <motion.span
                    animate={{ rotate: [0, 20] }} // Rotate animation sequence
                    transition={{
                      delay: 0.5,
                      type: "tween",
                      repeat: Infinity, // Infinite looping
                      repeatType: "mirror", // Loop the animation
                      duration: 0.5, // Duration for the entire animation cycle (2 seconds)
                      ease: "easeInOut", // Smoother easing for the rotation
                    }}
                  >
                    👋
                  </motion.span>
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <h2 className="max-w-[600px] md:text-xl mt-4 font-Monamd text-center md:text-start">
                  Fullstack Developer | Delivering Secure, High-Performance Apps
                  | Assisting Startups & Enterprises Craft intuitive interfaces
                  & efficient backend solutions.
                </h2>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative flex size-40 md:size-56 rounded-full  shrink-0">
                <img
                  className="aspect-square h-full w-full "
                  src={dp1}
                  alt="Ankit Bisht Photo"
                />
              </div>
            </BlurFade>
          </section>
        </div>
        <section className="about ">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl  font-Monasemiwide text-center md:text-start">
              About{" "}
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="max-w-full text-pretty text-sm text-black text-opacity-80 font-Monaregular text-center md:text-start">
              I am a dedicated full-stack developer with a passion for
              designing, building, and solving complex challenges through
              innovative software solutions. Recently, I graduated with a B.Tech
              in Computer Science Engineering from NIET, where I achieved an
              impressive score. My academic foundation is strong, having scored
              over 90% in both my 10th and 12th grades, which set the stage for
              my successful journey into technology. With a solid grasp of data
              structures and algorithms, I have tackled many DSA problems using
              Java. My core expertise lies in building and optimizing
              applications with the MERN stack, where I excel in rapid
              prototyping, debugging intricate systems, and enhancing
              performance. I have a keen ability to integrate diverse
              technologies seamlessly to deliver user-centric applications.
              Outside of work, I stay active by hitting the gym, running, and
              indulging in novels. I’m always eager to collaborate on exciting
              new projects and tackle complex tech challenges head-on.
            </p>
          </BlurFade>
        </section>
        <section className="experience">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-Monasemiwide text-center md:text-start">
                Work Experience{" "}
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              {experience.map((item, idx) => (
                <div key={item.id} className="rounded-lg flex ">
                  <div className="flex-none">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                      <img
                        className="aspect-square h-full w-full object-contain"
                        src={item.logo}
                        alt="Company Logo"
                      />
                    </span>
                  </div>
                  <div className="flex-grow ml-2 sm:ml-4 flex-col flex-none">
                    <div className="flex flex-col group">
                      <div className="flex justify-between cursor-pointer">
                        <h3 className="inline-flex items-center justify-center font-Monamd leading-none text-xs sm:text-sm">
                          {item.title}
                          <div className="transition-transform duration-500  translate-x-0 group-hover:translate-x-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible"

                          >
                            <svg
                              width="6"
                              height="8"
                              viewBox="0 0 6 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L4 4L1 7"
                                stroke="black"
                                stroke-width="2"
                                stroke-linecap="round"
                              />
                            </svg>
                          </div>
                        </h3>
                        <p className="text-xs md:text-sm text-black text-opacity-60 font-Monaregular">
                          {item.date}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-sm font-Monaregular">
                          {item.Company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </BlurFade>
            {/* <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="rounded-lg flex ">
                <div className="flex-none">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <img
                      className="aspect-square h-full w-full object-contain"
                      src=""
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex-grow ml-4 flex-col flex-none">
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h3 className="inline-flex items-center justify-center font-Monamd leading-none text-xs sm:text-sm">
                        Software Engineer
                      </h3>
                      <p className="text-black text-opacity-60 text-xs sm:text-sm tabular-nums text-muted-foreground text-right font-Monaregular">
                        Company Name
                      </p>
                    </div>
                    <div className="">
                      <p className="text-sm font-Monaregular">Lorem</p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade> */}
          </div>
        </section>
        <section className="education">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <h2 className="text-xl font-Monasemiwide text-center md:text-start  ">
                Education
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="rounded-lg flex ">
                <div className="flex-none">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <img
                      className="aspect-square h-full w-full object-contain"
                      src={nietlogo}
                      alt="College logo"
                    />
                  </span>
                </div>
                <div className="flex-grow ml-2 sm:ml-4 flex-col flex-none">
                  <div className="flex flex-col">
                    <div className="flex items-start md:items-center justify-between md:gap-x-2 text-base flex-col md:flex-row">
                      <h3 className="inline-flex items-center justify-center font-Monamd leading-none text-xs sm:text-sm ">
                        Noida Institute of Engineering and Technology
                      </h3>
                      <p className=" text-black text-opacity-60 text-xs sm:text-sm tabular-nums font-Monaregular text-muted-foreground text-right">
                        2020-2024
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xs md:text-sm font-Monaregular">
                        BTECH , CSE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="rounded-lg flex ">
                <div className="flex-none">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                    <img
                      className="aspect-square h-full w-full object-contain"
                      src={Vbblogo}
                      alt="School Logo"
                    />
                  </span>
                </div>
                <div className="flex-grow ml-2 sm:ml-4 flex-col flex-none">
                  <div className="flex flex-col">
                    <div className="flex items-start md:items-center justify-between md:gap-x-2 text-base flex-col md:flex-row">
                      <h3 className="inline-flex items-center justify-center font-Monamd leading-none text-xs sm:text-sm ">
                        Vidya Bal Bhawan Sr. Sec. School
                      </h3>
                      <p className=" text-black text-opacity-60 text-xs sm:text-sm tabular-nums font-Monaregular text-muted-foreground text-right">
                        2018-2020
                      </p>
                    </div>
                    <div className="">
                      <p className="text-xs md:text-sm font-Monaregular">
                        PCM , CBSE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
        <section className="Skills">
          <div className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <h2 className="text-xl font-Monasemiwide text-center md:text-start">
                Skills
              </h2>
            </BlurFade>
            <Marquee>
              {techs.map((item, index) => (
                <BlurFade delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
                  <div className="flex  justify-center items-center space-x-2 sm:space-x-16">
                    <img
                      src={item.src}
                      className="size-10 sm:size-16 mx-auto"
                      alt="Technology logo"
                    />
                    {/* <p className="text-xs sm:text-base font-medium ">
                    {item.name}
                  </p> */}
                  </div>
                </BlurFade>
              ))}
            </Marquee>

            {/* <motion.div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 text-center ">
              {techs.map((item, index) => (
                <BlurFade delay={BLUR_FADE_DELAY * 12 + index * 0.05}>
                  <motion.div
                    key={item.id}
                    className="rounded-full py-2"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    <img
                      src={item.src}
                      className="size-10 sm:size-16 mx-auto"
                    />
                    <p className="text-xs sm:text-base font-medium mt-2">
                      {item.name}
                    </p>
                  </motion.div>
                </BlurFade>
              ))}
            </motion.div> */}
            {/* </div> */}
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block font-Monasemiwide rounded-lg bg-[#08090a] text-white px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-Monasemiwide tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl font-Monamd">
                    I&apos;ve worked on a variety of projects, from simple
                    websites to complex web applications. Here are a few of my
                    favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section className="Cerifications">
          <CertificationSection />
        </section>
      </div>
    </div>
  );
}

export default Home;
