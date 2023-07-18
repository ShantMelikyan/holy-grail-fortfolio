import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-20 shadow-inner dark:bg-[#645d65a1]">
        <div className="max-w-3xl m-auto flex items-center w-full h-full justify-between px-6 ">
          <p className="text-sm text-center">Design & Dev by Shant ©2023.</p>
          <div className="flex justify-end [&>*]:p-2">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/shant-melikyan/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/shantmelikyan"
              target="_blank"
            >
              <FaGithub size={20} />
            </a>
            <a
              aria-label="Email"
              href="mailto:shantmelikyan@gmail.com"
              target="_blank"
            >
              <FaRegEnvelope size={20} />
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com/shant.photo"
              target="_blank"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
