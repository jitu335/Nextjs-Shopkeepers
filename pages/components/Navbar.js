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
      <nav className="bg-blue-600 p-4 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="font-bold text-lg">Prusty Home Mart</div>

  <div className="my-2 sm:my-0 flex justify-center">
        <button onClick={toggleDarkMode} >
          {darkMode ? (
            <FaSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text- bg-gray-600 text-xl" />
          )}
        </button>
</div>
        <div className="flex flex-col sm:flex-row sm:ml-auto space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
          <Link href="/aboutus" className="hover:text-red-700">
            About
          </Link>
          <Link href="/contactus" className="hover:text-amber-400">
            Contact
          </Link>
        </div>
      </nav>



      <p>
  📌 Important Notes:
If the post is very recent or didn’t reach many people, analytics might not appear.

LinkedIn doesn’t show who exactly viewed your photo post — just anonymous data like job roles, companies, and location.

If it’ s a video post, you get richer analytics like exact view counts and watch duration.
</p>
    </div>
  );
}

export default Navbar;
