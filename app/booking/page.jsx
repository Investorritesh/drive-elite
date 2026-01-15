'use client';

export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BookingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Booking Confirmed!
          </h1>

          <p className="text-gray-300 mb-8">
            Your premium vehicle has been successfully reserved. We'll send you the details via email shortly.
          </p>

          <button
            onClick={() => router.push('/')}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
