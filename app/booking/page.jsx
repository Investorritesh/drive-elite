'use client';

export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">
          Booking Confirmation
        </h1>

        <p className="text-gray-300 mb-6">
          Your car has been successfully reserved.
        </p>

        <button
          onClick={() => router.push('/')}
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
