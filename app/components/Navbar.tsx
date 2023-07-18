"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import logo_dark from "../../public/images/logo_SM.png";
import logo_light from "../../public/images/bright_logo_small.png";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const [border, setBorder] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleBorder = () => {
      if (window.scrollY > 64) {
        setBorder(true);
      } else setBorder(false);
    };

    const handleNaigation = () => {
      if (!nav) {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleNaigation);
    window.addEventListener("scroll", handleBorder);
  }, []);

  return (
    <nav className="fixed w-full z-[100]">
      <div
        className={`
          h-16  m-auto transition-colors duration-300 ease-in border-b backdrop-filter
          ${
            border
              ? "dark:bg-[#645d65a1] shadow-lg border-[#645d6525] bg-[#d8d3bc63]"
              : "bg-transparent border-transparent"
          } 
          ${
            // need to remove backdrop filter because chrome does not support two blurs. only one at a time.
            nav ? "backdrop-filter-none " : "backdrop-blur-md"
          }
        `}
      >
        <div className="flex items-center h-full justify-between px-6 max-w-3xl m-auto">
          <Link href="/" className="shrink-0">
            <Image
              src={resolvedTheme === "dark" ? logo_light : logo_dark}
              alt="logo"
              height={50}
              width={50}
              quality={100}
              priority={true}
            />
          </Link>
          <div>
            <ul className="hidden md:flex font-medium gap-8">
              <Link href="/">
                <li className=" text-sm uppercase link link-underline  hover:text-[#94948E]">
                  home
                </li>
              </Link>
              <Link href="#about">
                <li className=" text-sm uppercase link link-underline hover:text-[#94948E]">
                  about
                </li>
              </Link>
              <Link href="#projects">
                <li className=" text-sm uppercase link link-underline  hover:text-[#94948E]">
                  projects
                </li>
              </Link>
              <Link href="#contact">
                <li className="text-sm uppercase link link-underline  hover:text-[#94948E]">
                  contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center">
            <ThemeSwitcher />
            <div className="md:hidden">
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleNav}
                className="text-[#362D32] dark:text-[#E6E0C8] hover:bg-black/10"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>

          <div
            className={`
            md:hidden fixed left-0 top-0 transition duration-500 ease w-full
              ${
                nav
                  ? "min-h-screen backdrop-filter backdrop-blur-md visible"
                  : "backdrop-filter-none backdrop-blur-none invisible"
              }
            `}
          >
            <div
              className={`fixed w-[55%] sm:w-[40%] md:w-[25%] min-h-[70vh] p-10 ease rounded-xl m-4 bg-[#d8d3bc81] dark:bg-[#645d65a1] duration-300 border border-[#645d651a]
                ${nav ? "left-0" : "left-[-100%]"}
              `}
            >
              <div className="flex w-full items-center justify-between">
                <Link href="/" className="shrink-0" onClick={handleNav}>
                  <Image
                    src={resolvedTheme === "dark" ? logo_light : logo_dark}
                    alt="logo"
                    height={50}
                    width={50}
                    quality={100}
                    priority={true}
                  />
                </Link>
                <IconButton
                  onClick={handleNav}
                  size="large"
                  aria-label="close menu"
                  className="shadow-lg text-[#362D32] dark:text-[#E6E0C8] hover:dark:bg-[#7d757edc] hover:bg-[#b4824588]"
                >
                  <CloseIcon />
                </IconButton>
              </div>
              <div className="border-b my-4 pb-2 dark:border-[#E6E0C8] border-[#362D32] text-center">
                <p>Let&#39;s build things!</p>
              </div>

              <div className="py-4 flex flex-col items-center text-center">
                <ul className="">
                  <Link href="/" onClick={handleNav}>
                    <li className="py-4 text-sm uppercase dark:hover:text-[#d1d1d1] hover:text-[#E6E0C8] ">
                      home
                    </li>
                  </Link>
                  <Link href="/#about" onClick={handleNav}>
                    <li className="py-4 text-sm uppercase dark:hover:text-[#d1d1d1] hover:text-[#E6E0C8]">
                      about
                    </li>
                  </Link>
                  <Link href="/#projects" onClick={handleNav}>
                    <li className="py-4 text-sm uppercase dark:hover:text-[#d1d1d1] hover:text-[#E6E0C8]">
                      projects
                    </li>
                  </Link>
                  <Link href="/#contact" onClick={handleNav}>
                    <li className="py-4 text-sm uppercase dark:hover:text-[#d1d1d1] hover:text-[#E6E0C8]">
                      contact
                    </li>
                  </Link>
                </ul>
                <div className="pt-8 tracking-widest flex items-center flex-col">
                  <p>Connect with me</p>
                  <div className="flex flex-col justify-center my-4 w-full sm:w-[70%] space-y-4 ">
                    <div className="flex flex-row gap-4 justify-center">
                      <a
                        className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757edc] hover:bg-[#b4824588]"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/shant-melikyan/"
                        target="_blank"
                      >
                        <FaLinkedin size={20} />
                      </a>

                      <a
                        className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757edc] hover:bg-[#b4824588]"
                        aria-label="GitHub"
                        href="https://github.com/shantmelikyan"
                        target="_blank"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                    <div className="flex flex-row gap-4 justify-center">
                      <a
                        className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757edc] hover:bg-[#b4824588]"
                        aria-label="Email"
                        href="mailto:shantmelikyan@gmail.com"
                        target="_blank"
                      >
                        <FaRegEnvelope size={20} />
                      </a>

                      <a
                        className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757edc] hover:bg-[#b4824588]"
                        aria-label="Instagram"
                        href="https://instagram.com/shant.photo"
                        target="_blank"
                      >
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
