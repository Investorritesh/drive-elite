'use client';

import { useRouter } from 'next/navigation';
import { MapPin, Users, Star } from 'lucide-react'; // Imported Users & Star
import { cars } from '../data/cars';

// Dark navbar (same as main page)
function Header() {
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
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition-all shadow-md">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default function CarsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />

      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Browse Our Premium Fleet
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Choose from a wide range of luxury, sports, electric, and SUV cars. 
          Experience comfort, style, and performance like never before.
        </p>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl
                         hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-48 w-full object-cover rounded-t-2xl"
              />

              {/* Badge */}
              {car.badge && (
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  {car.badge}
                </div>
              )}

              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold text-lg">{car.name}</h3>

                <div className="flex items-center gap-2 mt-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  {car.rating} ({car.reviews})
                </div>

                <div className="flex gap-4 items-center text-gray-300 mt-2 text-sm">
                  <span className="flex items-center gap-1">
                    <Users size={14} /> {car.seats}
                  </span>
                  <span>{car.transmission}</span>
                </div>

                <p className="mt-2 font-bold text-lg text-white">${car.price}/day</p>

                <button
                  onClick={() => router.push(`/booking?id=${car.id}`)}
                  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold
                             hover:bg-blue-700 hover:scale-105 transition-all shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
