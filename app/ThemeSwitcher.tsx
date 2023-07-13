"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    if (light) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const light = theme === "light";
  return (
    <div>
      <button className="flex items-center" onClick={() => handleClick()}>
        {light ? (
          <IconButton size="medium" edge="start" aria-label="Dark Mode">
            <DarkModeIcon style={{ color: "#2d2d2d" }} />
          </IconButton>
        ) : (
          <IconButton size="medium" edge="start" aria-label="Light Mode">
            <LightModeIcon style={{ color: "#E6E0C8" }} />
          </IconButton>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
