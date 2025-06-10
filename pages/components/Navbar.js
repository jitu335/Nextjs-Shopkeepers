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
import { FaSun, FaMoon, FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState("Dentist");

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
  const handleSelectBusiness = (business) => {
    setSelectedBusiness(business);
    setShowDropdown(false);
  };

  return (
    <div className="w-full h-full min-h-screen overflow-x-hidden bg-white text-black dark:bg-gray-900 dark:text-white">
      <nav className="bg-blue-600 p-4 text-white relative z-50">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/my_photos/orffosoft.png"
              alt="My Photo"
              width={100}
              height={60}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
            />
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

          {/* Links + Business Dropdown */}
          <div className="flex flex-row sm:ml-auto items-center space-x-4 text-center sm:text-left relative">
            <Link href="/" className="hover:text-red-300">
              Home
            </Link>
            <Link href="#" className="hover:text-red-300">
              Vision
            </Link>
            <Link href="/aboutus" className="hover:text-red-300">
              About
            </Link>
            <Link href="/contactus" className="hover:text-amber-300">
              Contact
            </Link>

            {/* Business Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition flex items-center gap-2"
              >
                Select Business
                <FaChevronDown className="text-white text-sm" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-40 z-50">
                  {["Dentist", "Salon", "Bakery", "Electrician"].map(
                    (business) => (
                      <button
                        key={business}
                        onClick={() => handleSelectBusiness(business)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      >
                        {business}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Selected Business Content */}
      <main className="p-8 text-center">
        {selectedBusiness === "Dentist" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Dentist Clinic
            </h2>
            <p>Providing Root Canals, Teeth Cleaning, and more.</p>
          </div>
        )}
        {selectedBusiness === "Salon" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to Shine Salon</h2>
            <p>Offering Haircuts, Spa treatments, and beauty services.</p>
          </div>
        )}
        {selectedBusiness === "Bakery" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Welcome to Sweet Treats Bakery
            </h2>
            <p>Delicious Cakes, Cookies, and Pastries available.</p>
          </div>
        )}
        {selectedBusiness === "Electrician" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Welcome to QuickFix Electrician
            </h2>
            <p>All types of home electrical repairs and fittings.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Navbar;
