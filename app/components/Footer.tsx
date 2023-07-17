import React from "react";
import {FaLinkedin, FaGithub, FaRegEnvelope , FaInstagram} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="w-full h-20 px-4 pb-4">
      <div className="flex items-center justify-between w-full h-full max-w-3xl text-center m-auto p-6 rounded-full dark:bg-[#645d65a1] backdrop-filter backdrop-blur-md shadow border border-[#645d6525]">
        <p className="text-sm">Design & Dev by Shant ©2023.</p>
        <div className="flex justify-end [&>*]:m-2">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/shant-melikyan/"
                  target="_blank"
                >
                  <FaLinkedin size={20}/>
                </a>
                <a
                  aria-label="GitHub"
                  href="https://github.com/shantmelikyan"
                  target="_blank"
                >
                  <FaGithub  size={20}/>
                </a>
                <a
                  aria-label="Email"
                  href="mailto:shantmelikyan@gmail.com"
                  target="_blank"
                >
                  <FaRegEnvelope size={20}/>
                </a>
                <a
                  aria-label="Instagram"
                  href="https://instagram.com/shant.photo"
                  target="_blank"
                >
                  <FaInstagram size={20}/>
                </a>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
