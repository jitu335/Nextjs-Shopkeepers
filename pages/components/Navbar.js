import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { Card, Input } from "antd";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="w-full h-full min-h-screen overflow-x-hidden bg-white text-black dark:bg-gray-900 dark:text-white">
      <nav className="bg-blue-600 p-4 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Brand */}
          <div className="font-bold text-lg">
            Prusty Home Mart
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-2xl" />
              ) : (
                <FaMoon className="text-gray-200 text-2xl" />
              )}
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:ml-auto space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <Link href="/aboutus" className="hover:text-red-300">
              About
            </Link>
            <Link href="/contactus" className="hover:text-amber-300">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <p>
        📌 Important Notes: If the post is very recent or didn’t reach many
        people, analytics might not appear.
      </p>
    </div>
  );
}

export default Navbar;
