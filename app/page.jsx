'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, MapPin, Star, Shield, Clock, Users, ChevronRight, Loader2 } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Brands from './components/Brands';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const res = await fetch('/api/cars');
        const json = await res.json();
        if (json.success) {
          // Get 4 diverse featured cars
          setFeaturedCars(json.data.slice(0, 4));
        }
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, []);

  return (
    <div className="min-h-screen relative bg-gray-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <div className="glow-mesh" />
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/60 to-gray-900" />
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            alt="Luxury Car Background"
            style={{ animationDuration: '20s' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-5 py-2.5 rounded-full text-blue-400 text-sm font-bold mb-10 backdrop-blur-md"
          >
            <Star size={16} className="fill-blue-500 text-blue-500 animate-pulse" />
            <span className="tracking-wider uppercase">Premium Fleet Selection 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
          >
            DRIVE <span className="text-gradient">ELITE</span><br />
            <span className="text-4xl sm:text-5xl md:text-7xl opacity-90">THE NEW STANDARD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-400 mb-14 max-w-2xl leading-relaxed font-medium"
          >
            Access the world's most exclusive automotive icons.
            Instant booking, white-glove delivery, and 24/7 concierge service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-5xl"
          >
            <div className="glass-dark rounded-[3rem] p-3 md:p-4 shadow-2xl border border-white/10 group focus-within:border-blue-500/50 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="px-6 py-4 flex flex-col items-start border-r border-white/5 hover:bg-white/5 transition-colors rounded-[2rem]">
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1 flex items-center gap-1">
                    <MapPin size={12} /> Location
                  </span>
                  <input
                    className="bg-transparent border-none outline-none text-white w-full text-lg font-bold placeholder:text-gray-600"
                    placeholder="Enter City..."
                  />
                </div>
                <div className="px-6 py-4 flex flex-col items-start border-r border-white/5 hover:bg-white/5 transition-colors rounded-[2rem]">
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1 flex items-center gap-1">
                    <Calendar size={12} /> Pick-up
                  </span>
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none text-white w-full text-lg font-bold [color-scheme:dark]"
                  />
                </div>
                <div className="px-6 py-4 flex flex-col items-start border-r border-white/5 hover:bg-white/5 transition-colors rounded-[2rem]">
                  <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1 flex items-center gap-1">
                    <Calendar size={12} /> Return
                  </span>
                  <input
                    type="date"
                    className="bg-transparent border-none outline-none text-white w-full text-lg font-bold [color-scheme:dark]"
                  />
                </div>
                <button
                  onClick={() => router.push('/cars')}
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/30 group py-4 md:py-0"
                >
                  SEARCH <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      <Brands />

      {/* FEATURED FLEET */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-black uppercase tracking-[0.3em] text-sm mb-4"
            >
              Curated Collection
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-none uppercase">
              The <span className="text-gradient">Elite</span> Selection
            </h2>
            <p className="text-gray-400 text-xl font-medium leading-relaxed">
              Every vehicle in our collection is handpicked for its performance,
              luxury, and presence. Choose your next masterpiece.
            </p>
          </div>
          <button
            onClick={() => router.push('/cars')}
            className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl text-white font-bold transition-all"
          >
            VIEW ALL MODELS <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-32">
            <Loader2 className="animate-spin text-blue-600" size={60} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {featuredCars.map((car, index) => (
                <motion.div
                  key={car._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass-card rounded-[2.5rem] overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-white text-xs font-bold">{car.rating}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em] mb-1">{car.segment}</p>
                      <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase truncate">{car.name}</h3>
                    </div>

                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-8 border-t border-white/5 pt-6">
                      <span className="flex items-center gap-2"><Users size={16} /> {car.seats} Seats</span>
                      <span className="flex items-center gap-2 uppercase tracking-widest text-[10px] font-bold bg-white/5 px-2.5 py-1 rounded-lg italic">
                        {car.transmission}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-3xl font-black text-white leading-none">${car.price}</span>
                        <span className="text-xs text-gray-500 block mt-1 font-bold uppercase tracking-widest">Per Day</span>
                      </div>
                      <button
                        onClick={() => router.push(`/booking?id=${car._id}`)}
                        className="bg-white text-black p-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl hover:scale-110 active:scale-95"
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
      </section>

      <Stats />

      {/* WHY CHOOSE US - REDESIGNED */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-white mb-6 uppercase tracking-tighter">Why Choose <span className="text-gradient">Elite</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">Beyond just a rental, we provide an unparalleled experience of luxury and freedom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={32} />,
                title: "Maximum Security",
                desc: "Every rental includes comprehensive premium insurance and 24/7 roadside assistance for complete peace of mind."
              },
              {
                icon: <Clock size={32} />,
                title: "Seamless Booking",
                desc: "Book your dream car in less than 2 minutes. Instant confirmation and flexible cancellation policies."
              },
              {
                icon: <MapPin size={32} />,
                title: "Global Delivery",
                desc: "We deliver your chosen vehicle directly to your doorstep, airport, or hotel across 15+ major global cities."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 glass-card rounded-[3rem]"
              >
                <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Footer />
    </div>
  );
}
