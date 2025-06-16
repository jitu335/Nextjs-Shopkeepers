import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Card, Input } from "antd";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaSun,
  FaMoon,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { useRouter } from "next/router";
import { useDarkMode } from "../../context/DarkModeContext";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { width, height } = useWindowSize();

  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

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

      <Confetti
        width={width}
        height={height}
        numberOfPieces={100}
        recycle={false}
      />

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Your Business Partner in Web & App Development 🚀
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-gray-800 dark:text-white">
          Modern, scalable, mobile-friendly websites and Android apps to boost
          your business growth. 🎉
        </p>

        <Link
          href="/contactus"
          className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-105 transition transform"
        >
          Get in Touch <FaArrowRight className="ml-2" />
        </Link>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-8 w-full max-w-6xl">
        {[
          { title: "Web Development", emoji: "💻" },
          { title: "App Development", emoji: "📱" },
          { title: "UI/UX Design", emoji: "🎨" },
          { title: "SEO Optimization", emoji: "🚀" }, // नया चौथा सर्विस
        ].map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-xl font-bold mb-2">
              {service.emoji} {service.title}
            </h3>
            <p className="text-sm">
              {service.title === "SEO Optimization"
                ? "Boost your website ranking on Google & drive traffic!"
                : "High quality services to grow your business."}
            </p>
          </div>
        ))}
      </section>

      {/* Image Section with full flex fill */}
      <section className="py-8 px-4 w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            We deliver modern, scalable & responsive websites and mobile apps
            designed to boost your business presence online.
          </p>
        </div>

        <div className="flex-1">
          <Image
            src="/my_photos/webdevelopment-img.jpg"
            alt="Web Development"
            width={800}
            height={600}
            className="rounded-xl shadow-xl object-cover w-full"
          />
        </div>
      </section>
    </div>
  );
}

export default Navbar;
