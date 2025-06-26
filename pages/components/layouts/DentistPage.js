import React from "react";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useDarkMode } from "@/context/DarkModeContext"; 
import { FaWhatsapp } from "react-icons/fa";


export default function DentistPage() {
  const { darkMode } = useDarkMode();

    const handleWhatsAppShare = () => {
    const message = "Need a dentist? Check out Maa Gouri Dentist Clinic 🦷👇";
    const url = "https://business-orffosoft.onrender.com/business/dentist";
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
      message + " " + url
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
     <div
      className={`min-h-screen p-10 sm:p-10 relative ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-black"
      }`}
    >
      {/* Back Icon */}
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

      {/* Home Icon */}
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

      {/* Page Content */}
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

        {/* WhatsApp Share Button */}
        <div className="mt-8">
          <button
            onClick={handleWhatsAppShare}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
            Share on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
