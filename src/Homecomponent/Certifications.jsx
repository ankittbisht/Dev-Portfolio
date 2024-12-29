import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // React Icons
import cert1 from "../assets/svg/cert1.svg";
import infosyscert from "../assets/svg/infosys.svg";
import cert3 from "../assets/svg/cert3.svg";
import cert4 from "../assets/svg/cert4.svg";
import cert5 from "../assets/svg/cert5.svg";
import cert6 from "../assets/svg/cert6.svg";
import udemycert from "../assets/svg/udemy.svg";
import { img } from "framer-motion/client";

const certificatesdata = [
  {
    id: 1,
    name: "The Full Stack Web Development",
    src: "https://drive.google.com/file/d/1rJqE9nV-epq0Cuy0HkTeS5qtzOBqSvxd/view",
    platform: "infosys",
    img: infosyscert,
  },
  {
    id: 2,
    name: "Data Structures",
    src: "https://www.coursera.org/account/accomplishments/certificate/XXD47U5Y6ULB",
    platform: "coursera",
    img: cert1,
  },
  {
    id: 8,
    name: "Introduction to Web Development with HTML, CSS, JavaScript",
    src: "https://www.coursera.org/account/accomplishments/certificate/59G6PK4U34DL",
    platform: "IBM",
    img: cert3,
  },
  {
    id: 4,
    name: "Java Programming: Arrays, Lists, and Structured Data",
    src: "https://www.coursera.org/account/accomplishments/certificate/SRVDZB8DBRKX",
    platform: "coursera",
    img: cert4,
  },
  {
    id: 5,
    name: "Developing Cloud Apps with Node.js and React",
    src: "https://www.coursera.org/account/accomplishments/verify/UY22U4SYGJS7",
    platform: "IBM",
    img: cert5,
  },
  {
    id: 6,
    name: "The Complete React Developer Course",
    src: "https://drive.google.com/file/d/1rYn3JG0fhkfXO4IxMeihtm4UF9j5RWTT/view",
    platform: "Infosys",
    img: cert6,
  },
  ,
  {
    id: 3,
    name: "Object Oriented Programming in Java",
    src: "https://www.coursera.org/account/accomplishments/certificate/ZXYRJLSM8GXY",
    platform: "Coursera",
  },
  {
    id: 7,
    name: "The Complete 2023 Web Development Bootcamp",
    src: "https://udemy.com/certificate/UC-ef1cf53c-16fc-4724-8fea-8cd737787862/",
    platform: "udemy",
    img: udemycert,
  },

  {
    id: 9,
    name: "Django Application Development with SQL and Databases ",
    src: "https://www.coursera.org/account/accomplishments/verify/MCBPR2FUFPLX",
    platform: "IBM",
  },
  {
    id: 10,
    name: "Programming using Java",
    src: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_012880464547618816347_shared/1-5cb27644-c0e4-43f8-9275-327374f9b0a9.pdf",
    platform: "Infosys",
  },
  {
    id: 11,
    name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    src: "https://www.coursera.org/account/accomplishments/verify/3TCTD49LV8AG",
    platform: "IBM",
  },
];

const CertificationSection = () => {
  return (
    <div className="space-y-12 w-full py-12 ">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block font-Monasemiwide rounded-lg bg-[#08090a] text-white px-3 py-1 text-sm">
            Certifications
          </div>
          <h2 className="text-3xl font-Monasemiwide tracking-tighter sm:text-5xl">
            Driven by my passion for building and learning
          </h2>
          <p className="text-muted-foreground md:text-xl lg:text-base xl:text-xl font-Monamd">
            Throughout my learning journey, I've pursued numerous certifications
            to deepen my expertise. These credentials have been pivotal in
            expanding my knowledge, ensuring I stay updated with industry
            standards, and mastering cutting-edge technologies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesdata.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-between duration-500"
          >
            <div>
              <img
                src={cert.img ? cert.img : cert1}
                alt={cert.name}
                className="w-full h-40 object-cover rounded-lg object-top"
              />
              <div className="px-3 py-4 flex flex-col ">
                <h3 className=" text-base text-black font-Monamd leading-none ">
                  {cert.name}
                </h3>
                <p className="mt-2 self-start px-2 py-1 text-[12px] bg-[#f5f5f5]  rounded-sm  font-Monamd  mb-4  ">
                  {cert.platform}
                </p>
              </div>
            </div>

            <div className="px-3 pb-3 flex flex-col ">
              <a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
                className=" self-start flex gap-2 px-2 py-1 text-[10px] bg-black text-white items-center rounded-md border font-Monasemiwide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  shadow hover:bg-opacity-80 "
              >
                View Certificate
                <FaExternalLinkAlt className="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;
