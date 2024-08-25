// src/components/Navbar.tsx

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyApp
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
