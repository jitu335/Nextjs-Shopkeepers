import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function contact() {
  const { darkMode } = useDarkMode();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className={`min-h-screen px-4 py-10 flex flex-col items-center justify-start ${
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

      {/* Main Content */}
      {!showForm && !submitted && (
        <div className="text-center mt-16 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

          <p>
            <strong>📦 Service:</strong> Same-day delivery available
          </p>
          <p>
            <strong>📍 Address:</strong> Bhairagada Road, Muniguda, Odisha
            765020
          </p>
          <p>
            <strong>⏰ Hours:</strong> Open ⋅ Closes 9 PM
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="tel:+919876543210"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
            >
              📞 Call Now
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
            >
              📝 Fill Form
            </button>
          </div>
        </div>
      )}

      {/* Google Form View */}
      {showForm && (
        <div className="mt-10 w-full max-w-xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7hbSnrLZu6YZBerk8t_50mhhQPTb9yAyxZgmVzMw58vgF7A/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-md"
          >
            Loading…
          </iframe>

          <div className="text-center mt-6">
            <button
              onClick={() => {
                setShowForm(false);
                setSubmitted(true);
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition"
            >
              ✅ I've submitted the form
            </button>
          </div>
        </div>
      )}

      {/* Thank You Screen */}
      {submitted && (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">🎉 Thank You!</h2>
          <p>We received your message and will get back to you soon.</p>
          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
          >
            Go to Home
          </Link>
        </div>
      )}
    </div>
  );
}
