import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // React Icons

const certifications = [
  {
    title: "Full Stack Web Development",
    platform: "Coursera",
    link: "https://coursera.org/certificate/abc123",
    image: "https://example.com/path-to-image1.jpg",
  },
  {
    title: "Data Structures & Algorithms",
    platform: "Udemy",
    link: "https://udemy.com/certificate/xyz456",
    image: "https://example.com/path-to-image2.jpg",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    platform: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/def789",
    image: "https://example.com/path-to-image3.jpg",
  },
];

const CertificationSection = () => {
  return (
    <div className="space-y-12 w-full py-12 ">
      
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-[#08090a] text-white px-3 py-1 text-sm">
            Certifications
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Driven by my passion for building and learning
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Throughout my learning journey, I've pursued numerous certifications
            to deepen my expertise. These credentials have been pivotal in
            expanding my knowledge, ensuring I stay updated with industry
            standards, and mastering cutting-edge technologies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-gray-500 mb-4">{cert.platform}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationSection;
