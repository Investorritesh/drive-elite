'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, MapPin, Mail, Lock } from 'lucide-react';

// Dark header
function Header({ onSignInClick }) {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
            <MapPin className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">DriveElite</h1>
            <p className="text-xs text-gray-400">Premium Car Rentals</p>
          </div>
        </div>

        <nav className="flex gap-6 items-center">
          <a href="/" className="text-gray-300 hover:text-white transition-all flex gap-1 items-center">
            Home
          </a>
          <a href="/cars" className="text-gray-300 hover:text-white transition-all">Cars</a>
          <a href="/about" className="text-gray-300 hover:text-white transition-all">About</a>
          <button
            onClick={onSignInClick}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all shadow-md"
          >
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

// Dark glass footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

        {/* LINKS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-lg mb-2">Quick Links</h4>
          <a href="#" className="hover:text-white transition">Contact Us</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
        </div>

        {/* DISCLAIMER */}
        <div className="max-w-xl text-sm text-gray-400">
          <p className="mb-2">
            Elite Car Rental is an online platform connecting users to premium car rental services. 
            We do not own vehicles or provide our own rental quotes. Availability and prices depend on 
            the rental providers and may vary during your booking session.
          </p>
          <p>
            While we strive to present the best offers, we cannot guarantee that all deals are the lowest available. 
            All bookings are subject to availability and provider terms.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2026 DriveElite. All rights reserved.
      </div>
    </footer>
  );
}

export default function HomePage() {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }
    alert(`Signed in as ${form.email}`);
    setShowSignIn(false);
  };

  return (
    <div className="min-h-screen relative bg-gray-900">
      <Header onSignInClick={() => setShowSignIn(true)} />

      {/* HERO */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Drive <span className="gradient-text">Elite</span><br />
            Experience Luxury
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl">
            Rent premium cars, sports cars, and luxury vehicles with ease and confidence. 
            Your journey deserves the best.
          </p>

          {/* DARK GLASS SEARCH BAR */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 grid md:grid-cols-4 gap-6 w-full max-w-4xl transition-transform hover:scale-[1.02] duration-500">

            <div className="relative">
              <MapPin className="absolute left-4 top-4 text-gray-400" />
              <input
                className="w-full pl-12 py-4 rounded-xl border border-gray-700 
                  focus:ring-2 focus:ring-blue-600 outline-none text-gray-200
                  hover:shadow-lg transition duration-300"
                placeholder="Pick-up Location"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-4 text-gray-400" />
              <input
                type="date"
                className="w-full pl-12 py-4 rounded-xl border border-gray-700 
                  focus:ring-2 focus:ring-blue-600 outline-none text-gray-200
                  hover:shadow-lg transition duration-300"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-4 top-4 text-gray-400" />
              <input
                type="date"
                className="w-full pl-12 py-4 rounded-xl border border-gray-700 
                  focus:ring-2 focus:ring-blue-600 outline-none text-gray-200
                  hover:shadow-lg transition duration-300"
              />
            </div>

            <button
              onClick={() => router.push('/cars')}
              className="bg-blue-600 text-white rounded-2xl font-semibold text-lg
                hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
            >
              Search Cars
            </button>

          </div>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-400 text-sm">
            <span>✔ No Hidden Charges</span>
            <span>✔ Free Cancellation</span>
            <span>✔ 24/7 Support</span>
            <span>✔ Premium Fleet</span>
          </div>
        </div>
      </section>

      {/* LATEST FINDS SECTION */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center mt-20 rounded-3xl overflow-hidden mx-6 md:mx-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We're always on the lookout for cheap car rentals
          </h2>
          <p className="text-lg md:text-xl">
            Check out our latest finds and grab the best deals before they’re gone!
          </p>

          <button
            onClick={() => router.push('/cars')}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg
              hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
          >
            Browse Cars
          </button>
        </div>
      </section>

      {/* SIGN IN MODAL */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800/90 rounded-3xl shadow-2xl p-10 max-w-md w-full relative">
            <button
              onClick={() => setShowSignIn(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-xl font-bold"
            >
              ×
            </button>

            <h2 className="text-4xl font-bold text-white text-center mb-6">Sign In</h2>
            <p className="text-gray-400 text-center mb-8">
              Welcome back! Enter your credentials.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Signed in as ${form.email}`);
                setShowSignIn(false);
              }}
              className="grid gap-6"
            >
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-gray-900 text-gray-200 px-12 py-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none hover:shadow-lg transition"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full bg-gray-900 text-gray-200 px-12 py-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none hover:shadow-lg transition"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition shadow-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
