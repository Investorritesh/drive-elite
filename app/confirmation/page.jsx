'use client';

export const dynamic = 'error'; // ⬅️ THIS IS THE KEY FIX

import { useSearchParams } from 'next/navigation';
import { CheckCircle, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { cars } from '../data/cars';

export default function ConfirmationPage() {
  const params = useSearchParams();

  const carId = Number(params.get('id'));
  const pickup = params.get('pickup') || 'Not specified';
  const date = params.get('date') || 'Not specified';

  const car = cars.find(c => c.id === carId);

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-gray-400">
        Invalid booking details
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-10">
      <h1 className="text-3xl text-white mb-4 flex items-center gap-2">
        <CheckCircle className="text-green-500" /> Booking Confirmed
      </h1>

      <p>🚗 {car.name}</p>
      <p>📍 Pickup: {pickup}</p>
      <p>📅 Date: {date}</p>

      <Link href="/cars" className="inline-flex items-center gap-2 mt-6 text-blue-400">
        <ArrowLeft size={16} /> Back to Cars
      </Link>
    </div>
  );
}
