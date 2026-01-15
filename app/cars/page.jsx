'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Star, Loader2, Search, SlidersHorizontal, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { cars as fallbackCars } from '../data/cars';

export default function CarsPage() {
  const router = useRouter();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch('/api/cars');
        const json = await res.json();
        if (json.success && json.data.length > 0) {
          setCars(json.data);
        } else {
          setCars(fallbackCars);
        }
      } catch (error) {
        console.error('Failed to fetch cars:', error);
        setCars(fallbackCars);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  const filteredCars = cars.filter(car =>
    car.name.toLowerCase().includes(search.toLowerCase()) ||
    car.segment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen relative bg-gray-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <div className="glow-mesh" />
      <Header />

      {/* HERO / SEARCH SECTION */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6"
          >
            The Full Fleet
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]"
          >
            Find Your <span className="text-gradient">Iconic</span> Ride
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl font-medium max-w-2xl mb-12"
          >
            From limited editions to production classics. Explore our world-class
            collection of performance and luxury vehicles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-3xl glass-dark p-2 rounded-[2.5rem] flex items-center gap-2 border border-white/10 group focus-within:border-blue-500/50 transition-all shadow-2xl"
          >
            <div className="flex-1 flex items-center pl-6">
              <Search className="text-gray-500 mr-4" size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by brand, model or segment..."
                className="bg-transparent border-none outline-none text-white w-full py-4 text-lg font-bold placeholder:text-gray-600 tracking-tight"
              />
            </div>
            <button className="bg-white/5 hover:bg-white/10 p-4 rounded-[2rem] text-white transition-all hidden md:block">
              <SlidersHorizontal size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CARS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40">
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mb-6" strokeWidth={3} />
            <p className="text-gray-500 font-black uppercase tracking-[0.2em]">Preparing Fleet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car, index) => (
                <motion.div
                  layout
                  key={car._id || car.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-gray-800/20 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/10 cursor-pointer"
                  onClick={() => router.push(`/booking?id=${car._id || car.id}`)}
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-lg">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs font-bold">{car.rating}</span>
                    </div>
                    {car.badge && (
                      <div className="absolute bottom-4 left-4 bg-blue-600 px-3 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
                        {car.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] mb-1">{car.segment}</p>
                      <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase truncate tracking-tighter">{car.name}</h3>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 border-t border-white/5 pt-6">
                      <span className="flex items-center gap-2 font-medium"><Users size={16} /> {car.seats} Seats</span>
                      <span className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-black bg-white/5 px-2.5 py-1 rounded-lg italic text-gray-400">
                        {car.transmission}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-3xl font-black text-white leading-none">${car.price}</span>
                        <span className="text-[10px] text-gray-600 block mt-1 font-black uppercase tracking-[0.2em]">Per Day</span>
                      </div>
                      <button
                        className="bg-white text-black p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
                      >
                        <ChevronRight size={24} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {!loading && filteredCars.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <p className="text-gray-500 text-2xl font-bold italic">No matching vehicles found in our collection.</p>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
}
