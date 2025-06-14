import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/solid';

export default function SalonPage() {
  return (
    <div className="bg-pink-100 min-h-screen p-10 relative">

      {/* Back Icon - Top Left */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-pink-700 hover:text-pink-900"
        >
          <ArrowLeftIcon className="h-6 w-6 mr-1" />
          Back
        </button>
      </div>

      {/* Home Icon - Top Right */}
      <div className="absolute top-4 right-4">
        <Link href="/">
          <div className="flex items-center text-pink-700 hover:text-pink-900 cursor-pointer">
            <HomeIcon className="h-6 w-6 mr-1" />
            Home
          </div>
        </Link>
      </div>

      {/* Salon Page Content */}
      <div className="mt-16">
        <h1 className="text-3xl font-bold">Welcome to Glamour Touch Salon</h1>
        <p>Experience the best beauty and grooming services.</p>
      </div>
    </div>
  );
}
