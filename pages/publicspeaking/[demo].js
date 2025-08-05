import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid"; 
import { useDarkMode } from "@/context/DarkModeContext";
import PublicSpeakingDemo1 from "@/pages/components/layouts/PublicSpeakingDemo1";
import PublicSpeakingDemo2 from "@/pages/components/layouts/PublicSpeakingDemo2";

export default function DemoPage() {
  const router = useRouter();
  const { demo } = router.query;
  const { darkMode } = useDarkMode();

//   const pageStyles = `min-h-screen px-6 py-10 relative font-sans transition-colors duration-300 ${
//     darkMode
//       ? "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white"
//       : "bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800"
//   }`;

  // Page mapping
  const DemoComponent = {
    demo1: PublicSpeakingDemo1,
    demo2: PublicSpeakingDemo2,
  }[demo];

  if (!DemoComponent) {
    return (
      <div >
        <h1 className="text-center text-red-500 text-3xl mt-32">
          404 - Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div >
      <DemoComponent />
    </div>
  );
}
