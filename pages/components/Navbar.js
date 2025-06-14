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
import { FaSun, FaMoon, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDarkMode } from "../context/DarkModeContext";

function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  // const toggleDarkMode = () => {
  //   const isDark = !darkMode;
  //   setDarkMode(isDark);
  //   localStorage.setItem("theme", isDark ? "dark" : "light");

  //   if (isDark) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };
  const handleSelectBusiness = (business) => {
    router.push(`/business/${business}`);
    setShowDropdown(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Contact", href: "/contactus" },
  ];

  const businesses = ["dentist", "salon", "bakery", "electrician"];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <nav className="bg-blue-600 p-4 text-white relative z-50">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo + Mobile DarkMode Toggle */}
          <div className="flex items-center gap-4">
            <Image
              src="/my_photos/orffosoft.png"
              alt="Logo"
              width={100}
              height={60}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />

            {/* Dark Mode Toggle - Only for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition sm:hidden" // only mobile
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-2xl" />
              ) : (
                <FaMoon className="text-gray-200 text-2xl" />
              )}
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Nav Links + Desktop DarkMode Toggle */}
          <div
            className={`flex-col sm:flex-row sm:flex items-center absolute sm:static bg-blue-600 left-0 w-full sm:w-auto p-4 sm:p-0 transition-all duration-300 ${
              menuOpen ? "top-16" : "top-[-400px]"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
              {navLinks.map(({ name, href }) => (
                <Link key={name} href={href} className="hover:text-red-300">
                  {name}
                </Link>
              ))}
            </div>

            {/* Dropdown Menu */}
            <div className="relative mt-4 sm:mt-0 sm:ml-4">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition flex items-center gap-2"
              >
                Select Business <FaChevronDown className="text-white text-sm" />
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-md w-40 z-50 sm:right-0 sm:left-auto">
                  {businesses.map((b) => (
                    <button
                      key={b}
                      onClick={() => handleSelectBusiness(b)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200 capitalize"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle - Only for Desktop */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition ml-2 mt-4 sm:mt-0 hidden sm:block" // only desktop
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-2xl" />
              ) : (
                <FaMoon className="text-gray-200 text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="p-8 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl font-bold text-center">
          Coming Soon – New Features 🎉
        </h2>
      </main>
    </div>
  );
}

export default Navbar;
