import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext";
import { useRouter } from "next/router";

export default function PublicSpeakingDemo2() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen px-6 py-10 relative font-sans transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800"
      }`}
    >
      {/* Top Navigation */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => window.history.back()}
          className={`flex items-center ${
            darkMode
              ? "text-white hover:text-gray-300"
              : "text-pink-600 hover:text-pink-800"
          }`}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
      </div>

      <div className="absolute top-4 right-4">
        <Link href="/">
          <div
            className={`flex items-center cursor-pointer ${
              darkMode
                ? "text-white hover:text-gray-300"
                : "text-pink-600 hover:text-pink-800"
            }`}
          >
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
          </div>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h1
          className={`text-4xl sm:text-5xl font-extrabold mb-4 ${
            darkMode ? "text-white" : "text-pink-700"
          }`}
        >
          Transform Your Voice into Influence 🎤
        </h1>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://orffosoft.com/"
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition"
          >
            📞 Book Discovery Call
          </a>
          <a
            href="/portfolio"
            className={`border px-6 py-3 rounded-full transition ${
              darkMode
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-pink-600 text-pink-600 hover:bg-pink-100"
            }`}
          >
            🎯 View My Work
          </a>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`max-w-4xl mx-auto mt-16 text-center text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        © {new Date().getFullYear()} Powered by YourName | Helping Coaches Grow
        💼
      </div>
    </div>
  );
}
