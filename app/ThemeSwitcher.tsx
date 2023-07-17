"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true); 
    }, []);
  
    if (!mounted) {
      return null;
    }
  
    const handleClick = () => {
      const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };
  
    const iconColor = resolvedTheme === 'light' ? '#2d2d2d' : '#E6E0C8';
    const iconLabel = resolvedTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
  
    return (
      <IconButton
        className="flex items-center hover:bg-black/10"
        onClick={handleClick}
        size="large"
        edge="start"
        aria-label={iconLabel}
      >
        {resolvedTheme === 'light' ? (
          <DarkModeIcon sx={{ color: iconColor }} />
        ) : (
          <LightModeIcon sx={{ color: iconColor }} />
        )}
      </IconButton>
    );
  };

export default ThemeSwitcher;