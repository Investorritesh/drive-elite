'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Briefcase, Star, Quote, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const router = useRouter();
  const features = [
    { icon: Shield, title: 'Fully Insured', desc: 'Comprehensive premium coverage for every journey you take with our vehicles.' },
    { icon: Clock, title: '24/7 Support', desc: 'Our dedicated concierge team is available around the clock to assist you.' },
    { icon: Users, title: 'Global Elite', desc: 'Trusted by over 50,000 discerning clients across the world\'s major cities.' },
    { icon: Briefcase, title: 'Bespoke Solutions', desc: 'Tailored corporate and high-profile rental packages for every business need.' },
  ];

  const reviews = [
    {
      name: 'Sophia Lee',
      location: 'New York, USA',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 5,
      comment: 'The attention to detail is remarkable. From the interior cleanliness to the performance of the Lambo, everything was perfect.',
    },
    {
      name: 'Liam Smith',
      location: 'London, UK',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      comment: 'DriveElite makes luxury car rental as easy as ordering a coffee. The digital experience is world-class.',
    },
    {
      name: 'Emma Johnson',
      location: 'Sydney, Australia',
      photo: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 5,
      comment: 'Seamless delivery to my hotel. The Range Rover was pristine. Will definitely use their service for my next trip.',
    },
    {
      name: 'Noah Brown',
      location: 'Toronto, Canada',
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
      rating: 5,
      comment: 'Professional, punctual, and premium. The standard of their fleet is unparalleled in the industry.',
    },
  ];

  return (
    <div className="min-h-screen relative bg-gray-900 overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans">
      <div className="glow-mesh" />
      <Header />

      {/* HERO SECTION */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6"
          >
            Our Legacy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]"
          >
            Redefining <span className="text-gradient">Luxury</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mb-12 leading-relaxed"
          >
            We don't just rent cars; we provide keys to the world's most
            exclusive automotive experiences since 2020.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY / MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Workshop"
              className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1]">
              The Gold Standard in <span className="text-blue-500">Exotic</span> Rental
            </h2>
            <div className="space-y-6 text-gray-400 text-lg font-medium leading-relaxed">
              <p>
                Founded on the principles of automotive excellence and concierge service,
                DriveElite was born out of a desire to make the world's most desirable
                vehicles accessible to those who appreciate the finer things.
              </p>
              <p>
                Every vehicle in our collection undergoes rigorous multi-point
                inspections and is maintained by master technicians to ensure
                you experience the machine exactly as its creators intended.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <span className="block text-3xl font-black text-white mb-1">500+</span>
                <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Global Fleet</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                <span className="block text-3xl font-black text-white mb-1">15+</span>
                <span className="text-[10px] text-blue-500 font-black uppercase tracking-widest">Hub Cities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  <item.icon size={32} />
                </div>
                <h4 className="font-black text-xl text-white mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Voices of <span className="text-gradient">Excellence</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto">See why our clients choose DriveElite for their most important journeys.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-800/20 p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-blue-500/50 transition-all"
              >
                <Quote className="absolute top-8 right-8 text-blue-500/10 group-hover:text-blue-500/30 transition-colors" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm font-medium italic mb-8 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <img src={review.photo} className="w-12 h-12 rounded-full border-2 border-blue-600/20" alt={review.name} />
                  <div>
                    <h4 className="text-white font-bold tracking-tight">{review.name}</h4>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto glass rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10" />

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            Your Journey <span className="text-gradient">Awaits</span>
          </h2>
          <p className="text-gray-400 text-xl font-medium mb-12 max-w-xl mx-auto">
            Ready to experience the world's most capable machines?
            Our concierge team is standing by to prepare your elite ride.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => router.push('/cars')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-blue-600/40 group"
            >
              EXPLORE FLEET <ChevronRight size={24} className="group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => router.push('/signin')}
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-[1.05] active:scale-95 transition-all"
            >
              JOIN MEMBERSHIP
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
