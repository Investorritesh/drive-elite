'use client';

import { Shield, Clock, Users, Briefcase } from 'lucide-react';

// Dark navbar (same as main page)
function Header() {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
            <Shield className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">DriveElite</h1>
            <p className="text-xs text-gray-400">Premium Car Rentals</p>
          </div>
        </div>

        <nav className="flex gap-6 items-center">
          <a href="/" className="text-gray-300 hover:text-white transition-all">
            Home
          </a>
          <a href="/cars" className="text-gray-300 hover:text-white transition-all">
            Cars
          </a>
          <a href="/about" className="text-gray-300 hover:text-white transition-all">
            About
          </a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all shadow-md">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default function AboutPage() {
  const features = [
    { icon: Shield, title: 'Fully Insured', desc: 'All vehicles are fully insured for your safety.' },
    { icon: Clock, title: '24/7 Support', desc: 'We are available around the clock to assist you.' },
    { icon: Users, title: '50k+ Customers', desc: 'Trusted globally by thousands of clients.' },
    { icon: Briefcase, title: 'Business Ready', desc: 'Corporate and business rental solutions.' },
  ];

  const reviews = [
    {
      name: 'Sophia Lee',
      location: 'New York, USA',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      rating: 4,
      comment: 'Exceptional service and a smooth booking process. The car was spotless and luxurious.',
    },
    {
      name: 'Liam Smith',
      location: 'London, UK',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      comment: 'Outstanding experience! Premium vehicles and very professional support team.',
    },
    {
      name: 'Emma Johnson',
      location: 'Sydney, Australia',
      photo: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 3,
      comment: 'Great value for money. The car quality exceeded my expectations.',
    },
    {
      name: 'Noah Brown',
      location: 'Toronto, Canada',
      photo: 'https://randomuser.me/api/portraits/men/76.jpg',
      rating: 4,
      comment: 'Luxury ride, though the drop-off location was not very convenient.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />

      {/* Page Header */}
      <section className="text-center py-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          About DriveElite
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your trusted partner in premium car rentals. Luxury, convenience, and peace of mind, all in one place.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition">
          <h3 className="text-2xl font-bold mb-4 text-white">Our Story</h3>
          <p className="text-gray-300 mb-4">
            Founded in 2020, DriveElite provides premium rental experiences backed by insurance, 24/7 support, and world-class vehicles.
          </p>
          <p className="text-gray-300">
            Trusted by 50,000+ customers worldwide, we redefine comfort and convenience in car rentals.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-20">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center
                       hover:scale-105 transition"
          >
            <item.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-center
                         hover:scale-105 transition"
            >
              <img
                src={review.photo}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-blue-600"
              />
              <h4 className="text-white font-bold">{review.name}</h4>
              <p className="text-gray-400 text-sm mb-2">{review.location}</p>

              <div className="text-yellow-400 mb-2">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>

              <p className="text-gray-300 text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WRITE REVIEW */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Write a Review
          </h2>

          <div className="grid gap-6">
            <input
              placeholder="Your Name"
              className="bg-gray-900 text-gray-200 px-5 py-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              placeholder="Your Location"
              className="bg-gray-900 text-gray-200 px-5 py-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Share your experience with DriveElite..."
              className="bg-gray-900 text-gray-200 px-5 py-4 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
            />

            <div className="flex justify-center text-yellow-400 text-2xl gap-2">
              ★ ★ ★ ★ ★
            </div>

            <button
              className="bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg
                         hover:bg-blue-700 hover:scale-105 transition shadow-lg"
            >
              Submit Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
