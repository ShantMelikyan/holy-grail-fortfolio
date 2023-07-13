"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = (event : MediaQueryListEvent) => {
      const systemTheme = event.matches ? 'dark' : 'light';
      setTheme(systemTheme);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');
    setMounted(true);

    // Add event listener to detect system theme changes
    mediaQuery.addEventListener('change', updateTheme);

    // Clean up the event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const iconColor = theme === 'light' ? '#2d2d2d' : '#E6E0C8';
  const iconLabel = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

  return (
    <IconButton
      className="flex items-center"
      onClick={handleClick}
      size="medium"
      edge="start"
      aria-label={iconLabel}
    >
      {theme === 'light' ? (
        <DarkModeIcon sx={{ color: iconColor }} />
      ) : (
        <LightModeIcon sx={{ color: iconColor }} />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;