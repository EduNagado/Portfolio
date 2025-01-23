import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative w-full h-64">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-purple-400">{title}</h3>
        <p className="text-gray-300 mt-4">{description}</p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-600 transition"
          >
            <BsGithub />
            GitHub
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-600 transition"
            >
              <CgWebsite />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
