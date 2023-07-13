"use client";
import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Home = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-3xl w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="px-4">
          <p className="uppercase text-xs tracking-widest">Hi, my name is</p>
          <h1 className="py-4">Shant Melikyan</h1>
          <h2 className="pb-4">
            I&#39;m a Software Developer specializing in building websites.{" "}
          </h2>
          <p>
            Currently, I&#39;m focused on building responsive and accessible
            applications, from simple landing pages to full-fledged web apps.
            I&#39;m also learning back-end technologies to add powerful
            functionality.
          </p>
          <div className="flex justify-center items-center my-4 w-full [&>*]:m-2">
            <a
              className="shadow-lg dark:bg-[#675f689c] p-2 rounded-full"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/shant-melikyan/"
              target="_blank"
            >
              <LinkedInIcon className="dark:bg-#362D32"/>
            </a>

            <a
             className="shadow-lg dark:bg-[#675f689c] p-2 rounded-full"
              aria-label="GitHub"
              href="https://github.com/shantmelikyan"
              target="_blank"
            >
              <GitHubIcon className="dark:bg-#362D32" />
            </a>

            <a
            className="shadow-lg dark:bg-[#675f689c] p-2 rounded-full"
              aria-label="Email"
              href="mailto:shantmelikyan@gmail.com"
              target="_blank"
            >
              <EmailIcon className="dark:bg-#362D32"/>
            </a>

            <a
              className="shadow-lg dark:bg-[#675f689c] p-2 rounded-full"
              aria-label="Instagram"
              href="https://instagram.com/shant.photo"
              target="_blank"
            >
              <InstagramIcon className="dark:bg-#362D32" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
