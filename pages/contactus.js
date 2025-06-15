import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";


export default function contact() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 ${
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

      {/* Contact Card */}
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        
        <div className="space-y-4 text-sm">
          <div className="flex items-center">
            <span className="font-semibold w-28">Service:</span>
            <span>Same-day delivery available</span>
          </div>

          <div className="flex items-start">
            <span className="font-semibold w-28">Address:</span>
            <span>Bhairagada Road, Muniguda, Odisha 765020</span>
          </div>

          <div className="flex items-center">
            <span className="font-semibold w-28">Hours:</span>
            <span>Open ⋅ Closes 9 PM</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="tel:+919876543210" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md inline-block transition">
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
