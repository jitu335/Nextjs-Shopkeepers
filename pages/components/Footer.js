import Image from "next/image";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      © {new Date().getFullYear()} All rights reserved.
    </footer>
  );
}

