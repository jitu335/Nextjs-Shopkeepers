import Image from "next/image";
import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-8">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 mb-3 text-4xl">
        <a
          href="https://www.youtube.com/channel/UCri4Rk9rNtcwhAVjiF86z1A"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          title="YouTube"
        >
          <FaYoutube className="text-red-600" />
        </a>
        <a
          href="https://www.instagram.com/orffosoftit/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          title="Instagram"
        >
          <FaInstagram className="text-pink-500" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100068235101118"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          title="Facebook"
        >
          <FaFacebook className="text-blue-500" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-300">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
