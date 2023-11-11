import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import todo from "../../public/images/todoscreen.png";
import teamvibe from "../../public/images/teamvibe.png";
import blog from "../../public/images/blog.png";
import hrpawn from "../../public/images/hrpawn.png";
import { Reveal } from "./utils/Reveal";
import photobooth from "../../public/images/photobooth.png";
import aura from "@/public/images/aura.png"

const projects = [
  {
    name: "Aura Interiors",
    description:
      "Designed and developed a website for an Interior Design Studio",
    stack: ["React", "Next.js", "TailwindCSS","Framer Motion"],
    image: aura,
    github: "",
    link: "https://aura-interiors.com/",
  },
  {
    name: "360 Photo Booth",
    description:
      "Photo Booth rental service features a booking tool for easy event managment.",
    stack: ["React", "Next.js", "TailwindCSS"],
    image: photobooth,
    github: "https://github.com/ShantMelikyan/photo-booth",
    link: "https://la360booth.com/",
  },
  {
    name: "Teamvibe",
    description:
      "Teamvibe is a cybersports club website. Features include i18 language change and Google Maps API with custom maps.",
    stack: ["HTML", "CSS", "JavaScript", "Maps API"],
    image: teamvibe,
    github: "https://github.com/ShantMelikyan/team-vibe",
    link: "https://teamvibe.am",
  },
  {
    name: "HRpawn",
    description:
      "HRpawn is an e-commerce website for a jewelry store. Features over 1000 items in different categories.",
    stack: ["Shopify", "HTML", "CSS", "JavaScript"],
    image: hrpawn,
    github: "",
    link: "https://hrpawn.co",
  },
  {
    name: "Blog",
    description:
      "My personal blog where I write articles on different computer science topics.",
    stack: ["React", "Next.js", "TailwindCSS"],
    image: blog,
    github: "https://github.com/ShantMelikyan/blog",
    link: "https://blog.shantmelikyan.com/",
  },
  {
    name: "To-Do",
    description:
      "ToDo web application to keep track of your tasks. Features include drag and drop for reordering tasks and local storage for persistent data across sessions.",
    stack: ["React", "Next.js", "TailwindCSS"],
    image: todo,
    github: "https://github.com/ShantMelikyan/todo-next",
    link: "https://todo.shantmelikyan.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-4">
      <div className="w-full min-h-full p-4">
        <div className="max-w-3xl px-4 py-16 mx-auto">
          <Reveal>
            <h2 className="pb-4">Projects</h2>
          </Reveal>
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <Reveal>
                  <div className="mx-auto grid md:grid-cols-2 mb-10">
                    <div className="md:pl-6 flex flex-col justify-center md:order-1 pb-4">
                      <div className="flex flex-row items-baseline py-2 gap-3">
                        <h3 className="tracking-widest font-semibold">
                          {project.name}
                        </h3>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Link"
                          >
                            <FaGithub size={16} aria-hidden="true" />
                          </a>
                        )}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Website Link"
                        >
                          <FaExternalLinkAlt size={15} aria-hidden="true" />
                        </a>
                      </div>
                      <p className="tracking-wide">{project.description}</p>
                      <ul className="flex flex-wrap flex-row justify-start">
                        {project.stack.map((tech, idx) => (
                          <li
                            className="bg-gradient-to-r dark:from-[#675f68] dark:to-[#53454d] bg-[#ece6cb] shadow-md px-4 py-1  mr-2 mt-2 rounded-full"
                            key={idx}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Website Link"
                      className="hover:blur-0 relative"
                    >
                      <Image
                        className="shadow-xl rounded-lg md:order-0 w-full"
                        src={project.image}
                        alt={`${project.name} image`}
                        width={500}
                        height={300}
                        sizes="calc(100vw - 64px)"
                        placeholder="blur"
                      />
                      <div className="opacity-0 rounded-md hover:opacity-100 duration-500 absolute inset-0 flex justify-center items-center text-[#E6E0C8] hover:bg-[#000000c0]">
                        <FaExternalLinkAlt size={20} aria-hidden="true" />
                      </div>
                    </a>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
