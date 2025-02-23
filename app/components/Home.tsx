import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { Reveal } from "./utils/Reveal";

const Home = () => {
  return (
    <section id="home">
      <div className="w-full h-screen text-center">
        <div className="max-w-3xl w-full h-full mx-auto p-4 flex justify-center items-center">
          <div className="px-4">
            <Reveal delay={0.3}>
              <p className="uppercase text-xs tracking-widest">
                Hi, my name is
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <h1 className="py-4">Shant Melikyan</h1>
            </Reveal>
            <Reveal delay={0.5}>
              <h2 className="pb-4">
                I&#39;m a Software Developer specializing in building websites.
              </h2>
            </Reveal>
            <Reveal delay={0.6}>
              <p>
                Currently, I&#39;m focused on building responsive and accessible
                applications, from simple landing pages to full-fledged web
                apps. I&#39;m also learning back-end technologies to add
                powerful functionality.
              </p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="flex justify-center items-center my-4 w-full [&>*]:m-2">
                <a
                  className="shadow-lg dark:bg-[#675f689c] bg-[#ece6cb] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#cfcab5e1]"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/shant-melikyan/"
                  target="_blank"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  className="shadow-lg dark:bg-[#675f689c] bg-[#ece6cb] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#cfcab5e1]"
                  aria-label="GitHub"
                  href="https://github.com/shantmelikyan"
                  target="_blank"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  className="shadow-lg dark:bg-[#675f689c] bg-[#ece6cb] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#cfcab5e1]"
                  aria-label="Email"
                  href="mailto:shant@shantmelikyan.com"
                  target="_blank"
                >
                  <FaRegEnvelope size={20} />
                </a>
                <a
                  className="shadow-lg dark:bg-[#675f689c] bg-[#ece6cb] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#cfcab5e1]"
                  aria-label="Instagram"
                  href="https://instagram.com/shant.photo"
                  target="_blank"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
