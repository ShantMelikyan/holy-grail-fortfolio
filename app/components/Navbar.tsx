"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Image from "next/image";
import logo from "../../public/images/logo_SM.png";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const { theme } = useTheme();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed bg-[#BC8848] dark:bg-[#645D65] h-16  w-full shadow-xl">
      <div className="flex items-center w-full h-full justify-between gap-2 px-4 md:px-6 lg:px-20">
        <Image src={logo} alt="logo" height={40} priority={true}></Image>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8] ">
                home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                about
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <IconButton
            size="medium"
            edge="start"
            aria-label="menu"
            className="md:hidden"
            onClick={handleNav}
          >
            <MenuIcon style={{ color: "#2d2d2d" }} />
          </IconButton>
        </div>

        <div
          className={
            nav
            ?  "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50 transition-all duration-500 ease opacity-100 visible"
            : "md:hidden fixed left-0 top-0 h-screen transition-all duration-500 ease opacity-0 invisible"
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#BC8848] dark:bg-[#645D65] p-10 ease-in duration-500"
                : "fixed h-full left-[-100%] top-0 p-10 ease duration-500"
            }
          >
          
              <div className="flex w-full items-center justify-between">
                <Image
                  src={logo}
                  alt="logo"
                  width={40}
                  height={40}
                  priority={true}
                ></Image>
                <IconButton
                  onClick={handleNav}
                  size="medium"
                  edge="start"
                  aria-label="close menu"
                  className="shadow-lg"
                >
                  <CloseIcon style={{ color: "#2d2d2d" }} />
                </IconButton>
              </div>
              <div className="border-b my-4 border-[#362D32] text-[#362D32]">
                <p>Let&#39;s build things!</p>
              </div>
         

            <div className="py-4 flex-col text-[#362D32] dark:text-[#E6E0C8]">
              <ul className="">
                <Link href="/">
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8] ">
                    home
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    about
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    skills
                  </li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm uppercase dark:hover:text-[#94948E] hover:text-[#E6E0C8]">
                    contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40 uppercase tracking-widest">
                <p>Let&#39;s connect</p>
                <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                  <IconButton
                    size="large"
                    edge="start"
                    className="shadow-lg"
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/shant-melikyan/"
                    target="_blank"
                  >
                    <LinkedInIcon style={{ color: "#2d2d2d" }} />
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="start"
                    className="shadow-lg"
                    aria-label="github"
                    href="https://github.com/shantmelikyan"
                    target="_blank"
                  >
                    <GitHubIcon style={{ color: "#2d2d2d" }} />
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="start"
                    className="shadow-lg"
                    aria-label="email"
                    href={"mailto:shantmelikyan@gmail.com"}
                    target="_blank"
                  >
                    <EmailIcon style={{ color: "#2d2d2d" }} />
                  </IconButton>

                  <IconButton
                    size="large"
                    edge="start"
                    className="shadow-lg"
                    aria-label="instagram"
                    href={"https://instagram.com/shant.photo"}
                    target="_blank"
                  >
                    <InstagramIcon style={{ color: "#2d2d2d" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
