'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cars } from '../data/cars';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ConfirmationContent() {
  const params = useSearchParams();
  const carId = Number(params.get('id'));
  const pickup = params.get('pickup') || 'Not specified';
  const date = params.get('date') || 'Not specified';

  const car = cars.find(c => c.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
        <p className="text-xl mb-6">Invalid booking details. Please try again.</p>
        <Link href="/cars" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
          Back to Fleet
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12">
        <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-500" size={48} />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">Booking Confirmed!</h1>
              <p className="text-gray-400">Thank you for choosing DriveElite. Your ride is ready.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2">Vehicle Details</h3>
              <div className="flex items-center gap-4">
                <img src={car.image} alt={car.name} className="w-32 h-20 object-cover rounded-xl shadow-md" />
                <div>
                  <h4 className="font-bold text-lg text-white">{car.name}</h4>
                  <p className="text-gray-400 text-sm">Luxury Class</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2">Reservation Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pickup Location</p>
                    <p className="text-gray-200">{pickup}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-500" size={20} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pickup Date</p>
                    <p className="text-gray-200">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/cars"
              className="flex-1 bg-gray-700 text-white py-4 rounded-xl text-center font-bold hover:bg-gray-600 transition shadow-lg inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={18} /> Browse Other Cars
            </Link>
            <Link
              href="/"
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl text-center font-bold hover:bg-blue-700 transition shadow-lg"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900 p-10 text-white flex items-center justify-center">Loading confirmation...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}
