'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="glass-dark sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <MapPin className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">DriveElite</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Premium Rentals</p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 items-center">
          {['Home', 'Cars', 'About'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-all font-bold text-xs uppercase tracking-widest relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-6 pl-6 border-l border-white/10">
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white">
                  <User size={16} className="text-blue-400 group-hover:text-white" />
                </div>
                <span className="text-sm font-bold tracking-tight">{user.name.split(' ')[0]}</span>
              </div>
              <button
                onClick={logout}
                className="text-gray-500 hover:text-red-500 transition-colors bg-white/5 p-2 rounded-lg"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="bg-white text-black px-8 py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-xl text-xs font-black uppercase tracking-widest"
            >
              Sign In
            </Link>
          )}
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          <Link
            href="/"
            className="block text-gray-300 hover:text-white text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/cars"
            className="block text-gray-300 hover:text-white text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Cars
          </Link>
          <Link
            href="/about"
            className="block text-gray-300 hover:text-white text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          {user ? (
            <div className="pt-4 border-t border-gray-800 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 text-red-400 px-6 py-3 rounded-xl font-bold"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          ) : (
            <Link
              href="/signin"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;


