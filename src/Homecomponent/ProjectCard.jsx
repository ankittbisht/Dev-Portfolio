import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  return (
    <div className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-md bg-white">
      <div className="block cursor-pointer">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </div>
      <div className="px-2 bg-white">
        <div className="space-y-1">
          <div className="mt-1 text-base text-black font-medium">{title}</div>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-col px-2 bg-white">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <div
                className="px-1 py-0 text-[10px] bg-[#f5f5f5]  rounded-sm font-semibold"
                variant="secondary"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-2 bg-white">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <a href={link?.href} key={idx} target="_blank">
                <div
                  key={idx}
                  className="flex gap-2 px-2 py-1 text-[10px] bg-black text-white items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  shadow hover:bg-opacity-80 "
                >
                  {link.icon}
                  {link.type}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
