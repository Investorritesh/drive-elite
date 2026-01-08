'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin } from 'lucide-react';

function Header() {
  const [open, setOpen] = useState(false);

  const SignInLink = (
    <Link
      href="/signin"
      className="text-gray-300 hover:text-white transition font-medium"
    >
      Sign In
    </Link>
  );

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
            <MapPin className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">DriveElite</h1>
            <p className="text-xs text-gray-400">Premium Car Rentals</p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="/cars" className="text-gray-300 hover:text-white transition">
            Cars
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
          {SignInLink}
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-6 space-y-4">
          <Link href="/" className="block text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/cars" className="block text-gray-300 hover:text-white">
            Cars
          </Link>
          <Link href="/about" className="block text-gray-300 hover:text-white">
            About
          </Link>
          {SignInLink}
        </div>
      )}
    </header>
  );
}

export default Header;
