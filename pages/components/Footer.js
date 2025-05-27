import Image from "next/image";

import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}

export default Footer;
