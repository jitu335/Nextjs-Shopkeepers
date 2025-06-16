import React from 'react'
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "../context/DarkModeContext";

export default function aboutus() {
   const { darkMode } = useDarkMode();
   
    return (
         <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Back Icon - Top Left */}
      <div className="absolute top-4 left-4">
        <Link href="/" onClick={() => window.history.back()}>
          <ArrowLeftIcon className="h-6 w-6 cursor-pointer hover:text-blue-500 transition" />
        </Link>
      </div>

      {/* Home Icon - Top Right */}
      <div className="absolute top-4 right-4">
        <Link href="/">
          <HomeIcon className="h-6 w-6 cursor-pointer hover:text-blue-500 transition" />
        </Link>
      </div>

      {/* About Content */}
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
        About Us
      </h1>

      <p className="max-w-xl text-center text-base sm:text-lg leading-relaxed">
        Welcome to <span className="font-semibold text-blue-500">Orffosoft</span> — your trusted partner in
        <span className="font-semibold text-green-500"> Freelancing Web Development </span>
        and
        <span className="font-semibold text-green-500"> React Native Android App Development</span>.
      </p>

      <p className="max-w-xl text-center text-base sm:text-lg mt-4 leading-relaxed">
        We build stunning, responsive, and business-ready websites & mobile apps that
        help your brand grow in the digital world. Whether it's a simple static website
        or a complex full-stack app — we deliver quality, speed, and perfection.
      </p>

      <p className="max-w-xl text-center text-base sm:text-lg mt-4 leading-relaxed">
        Let's turn your business ideas into reality with modern technology and creativity. 
        Your success is our mission!
      </p>

      <p className="mt-8 text-sm text-gray-400 dark:text-gray-500 text-center">
        © {new Date().getFullYear()} Orffosoft. All rights reserved.
      </p>
    </div>
    );
  }