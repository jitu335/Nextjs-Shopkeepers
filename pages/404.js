import Link from "next/link";
import Image from "next/image";

export default function Custom404Error() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center p-8 text-black dark:text-white">
      {/* Big Animated 404 */}
      <h1 className="text-6xl font-extrabold mb-4 text-red-500 animate-pulse">
        404
      </h1>

      {/* Bouncing Image */}
      <Image
        src="/my_photos/404-error.jpg"
        alt="Not Found"
        width={400}
        height={300}
        className="rounded-xl shadow-2xl object-contain mb-6 animate-bounce"
      />

      {/* Subheading with fade-like effect (using opacity) */}
      <h2 className="text-2xl font-bold mb-4 opacity-90">
        Oops! Page Not Found
      </h2>

      <p className="text-lg mb-8 max-w-md opacity-80">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Glow + Zoom Button */}
      <Link href="/">
        <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-white font-semibold rounded-full cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-2xl animate-pulse">
          Go to Home
        </span>
      </Link>
    </div>
  );
}
