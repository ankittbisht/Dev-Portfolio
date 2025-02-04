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
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover object-top"
          />
        )}
      </div>
      <div className="px-2 bg-white">
        <div className="space-y-1">
          <div>
          <div className="mt-2 text-base text-black font-Monamd leading-none">{title}</div>
          <time className="font-Monaregular text-xs leading-none ">{dates}</time>
          </div>
       
          {/* <div className="hidden font-Monaregular text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div> */}
          <div className="prose py-2 max-w-full text-pretty font-Monaregular text-xs text-muted-foreground dark:prose-invert">
            {description}
          </div>
        </div>
      </div>
      <div className="mt-auto flex flex-col px-2 bg-white">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <div
                className="px-2 py-1 text-[10px] bg-[#f5f5f5]  rounded-sm font-Monamd"
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
                  className="flex gap-1 px-3 pb-2 pt-1 text-[10px] bg-black text-white items-center rounded-md border  transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent  shadow hover:bg-opacity-80 font-Monamd "
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
