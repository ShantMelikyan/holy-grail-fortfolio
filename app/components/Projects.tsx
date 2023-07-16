import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import todo from "../../public/images/todoscreen.png";
import teamvibe from "../../public/images/teamvibe.png";
import blog from "../../public/images/blog.png";
import hrpawn from "../../public/images/hrpawn.png";

const projects = [
  {
    name: "To-Do",
    description:
      "ToDo web application to keep track of your tasks. Features include drag and drop for reordering tasks and local storage for persistent data across sessions.",
    stack: ["React", "Next.js", "TailwindCSS"],
    image: todo,
    github: "https://github.com/ShantMelikyan/todo-next",
    link: "https://todo.shantmelikyan.com/",
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
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full h-full p-4">
        <div className="max-w-3xl px-4 py-16 mx-auto">
          <h2 className="pb-4">Projects</h2>
          {projects.map((project, idx) => {
            return (
              <div className="mx-auto grid md:grid-cols-2 mb-10" key={idx}>
                <div className="md:pl-6 flex flex-col justify-center md:order-1 pb-4">
                  <div className="flex flex-row items-baseline py-2 gap-4">
                    <h3 className="tracking-widest font-semibold">
                      {project.name}
                    </h3>
                    {project.github !== "" && (
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
                        className="dark:bg-[#675f689c] bg-[#ece6cb] shadow-sm px-3 py-1 mr-2 mt-2 rounded-full border-[#645d653d] border"
                        key={idx}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  className="shadow-xl rounded-md md:order-0"
                  src={project.image}
                  alt={`${project.name} image`}
                  width={500}
                  height={300}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
