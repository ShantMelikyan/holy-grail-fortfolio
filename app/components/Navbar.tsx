"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import logo_dark from "../../public/images/logo_SM.png";
import logo_light from "../../public/images/bright_logo_small.png";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {FaLinkedin, FaGithub, FaRegEnvelope , FaInstagram} from "react-icons/fa"

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed bg-[#BC8848] dark:bg-[#645D65] h-16 w-full shadow-xl z-[100]">
      <div className="flex items-center w-full h-full justify-between px-4 md:px-6 lg:px-20 ">
        <Image
          src={resolvedTheme === "dark" ? logo_light : logo_dark}
          alt="logo"
          height={50}
          width={50}
          quality={100}
        />
        <div>
          <ul className="hidden md:flex font-medium">
            <Link href="/">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#ffffff] hover:text-[#E6E0C8]">
                home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#ffffff] hover:text-[#E6E0C8]">
                about
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#ffffff] hover:text-[#E6E0C8]">
                projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#ffffff] hover:text-[#E6E0C8]">
                contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="md:hidden">
            <IconButton size="medium" aria-label="menu" onClick={handleNav} className="text-[#362D32] dark:text-[#E6E0C8] hover:bg-black/10">
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 transition-all duration-300 ease opacity-100 visible z-50"
              : "md:hidden fixed left-0 top-0 h-screen transition-all duration-300 ease opacity-0 invisible "
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#BC8848] dark:bg-[#645D65] p-10 ease-in duration-300"
                : "fixed h-full left-[-100%] top-0 p-10 ease duration-300"
            }
          >
            <div className="flex w-full items-center justify-between">
              <Image
                src={resolvedTheme === "light" ? logo_dark : logo_light}
                alt="logo"
                height={50}
                width={50}
                priority={true}
              />
              <IconButton
                onClick={handleNav}
                size="large"
                aria-label="close menu"
                className="shadow-lg text-[#362D32] dark:text-[#E6E0C8] hover:dark:bg-[#7d757e] hover:bg-[#b48245]"
              >
                <CloseIcon className=""  />
              </IconButton>
            </div>
            <div className="border-b my-4 pb-2 dark:border-[#E6E0C8] border-[#362D32]">
              <p>Let&#39;s build things!</p>
            </div>

            <div className="py-4 flex-col">
              <ul className="">
                <Link href="/" onClick={handleNav}> 
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8] ">
                    home
                  </li>
                </Link>
                <Link href="/#about" onClick={handleNav}>
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    about
                  </li>
                </Link>
                <Link href="/#projects" onClick={handleNav}>
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    projects
                  </li>
                </Link>
                <Link href="/#contact" onClick={handleNav}>
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40 uppercase tracking-widest">
                <p>Connect with me</p>
                <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <a
              className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#b48245]"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/shant-melikyan/"
              target="_blank"
            >
              <FaLinkedin size={20}/>
            </a>

            <a
             className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#b48245]"
              aria-label="GitHub"
              href="https://github.com/shantmelikyan"
              target="_blank"
            >
              <FaGithub  size={20}/>
            </a>

            <a
            className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#b48245]"
              aria-label="Email"
              href="mailto:shantmelikyan@gmail.com"
              target="_blank"
            >
              <FaRegEnvelope size={20}/>
            </a>

            <a
              className="shadow-lg dark:bg-[#675f689c] p-3 rounded-full hover:dark:bg-[#7d757e] hover:bg-[#b48245]"
              aria-label="Instagram"
              href="https://instagram.com/shant.photo"
              target="_blank"
            >
              <FaInstagram size={20}/>
            </a>
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
