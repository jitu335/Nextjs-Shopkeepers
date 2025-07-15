import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext";

export default function PublicSpeaking() {
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
        <p
          className={`text-lg mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Helping Public Speaking & Confidence Coaches get 50–100 leads/month
          through stunning landing pages & targeted ads 🚀
        </p>

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

      {/* Result Section (No Card) */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2
          className={`text-2xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-pink-700"
          }`}
        >
          🔥 Real Result
        </h2>
        <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-4`}>
          Coach Neha Sharma got 176 leads in 12 days — with just ₹5,000 ad
          spend!
        </p>

        <div className="flex justify-center">
          <Image
            src="/my_photos/speaking-coach.png"
            alt="Speaking Coach Result"
            width={900}
            height={200}
            className="rounded-lg shadow-md object-contain h-[240px] w-auto"
          />
        </div>
      </div>

      {/* Process Section (Flat) */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2
          className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-pink-700"
          }`}
        >
          🚀 How It Works
        </h2>
        <ul
          className={`space-y-2 text-left list-disc list-inside max-w-xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>We create a beautiful landing page for your offer</li>
          <li>We design high-converting ads (image + copy)</li>
          <li>We run & monitor Facebook + Instagram ads</li>
          <li>You get leads directly to your WhatsApp or Email</li>
        </ul>
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
