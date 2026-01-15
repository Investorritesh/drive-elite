import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight uppercase">DriveElite</h2>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest leading-none">The Gold Standard</p>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mb-8">
            The world's most exclusive car rental platform.
            Experience luxury at its finest with our curated collection of elite vehicles.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/cars" className="hover:text-blue-500 transition">Our Fleet</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition">Luxury Experience</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition">Membership</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition">Partners</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Suppport</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-blue-500 transition">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition">Booking Guide</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" /> +1 (800) DRIVE-ELITE</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> concierge@driveelite.com</li>
            <li className="flex items-center gap-3"><MapPin size={16} className="text-blue-500" /> 5th Ave, Manhattan, NY</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-600">
        <p>&copy; 2026 DriveElite Global. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Cookie Policy</a>
          <a href="#" className="hover:text-white transition">Security</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
