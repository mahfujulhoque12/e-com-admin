"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaCloudMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Log the current theme for debugging
  console.log("Current theme:", theme);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" bg-btn   text-color-btn shadow-sm p-2 rounded-full"
    >
      {theme === "dark" ? <LuSunMedium /> : <FaCloudMoon />}
    </button>
  );
}
