import React from "react";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/pages/context/DarkModeContext";

export default function DentistPage() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`min-h-screen p-10 sm:p-10 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"
      }`}
    >
      {/* Back Icon - Previous Page */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => window.history.back()}
          className={`flex items-center ${
            darkMode
              ? "text-yellow-300 hover:text-yellow-500"
              : "text-blue-700 hover:text-blue-900"
          }`}
        >
          <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1" />
          Back
        </button>
      </div>

      {/* Home Icon - Go to Home Page */}
      <div className="absolute top-4 right-4">
        <Link href="/">
          <div
            className={`flex items-center cursor-pointer ${
              darkMode
                ? "text-yellow-300 hover:text-yellow-500"
                : "text-blue-700 hover:text-blue-900"
            }`}
          >
            <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-1" />
            Home
          </div>
        </Link>
      </div>

      {/* Dentist Page Content */}
      <div className="mt-16 text-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Welcome to Maa Gouri Dentist Clinic
        </h1>
        <p
          className={`text-base sm:text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          High quality dental care services.
        </p>
      </div>
    </div>
  );
}
