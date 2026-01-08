import { Star, Users } from 'lucide-react';
import Link from 'next/link';

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl card-hover overflow-hidden relative">

      {car.badge && (
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {car.badge}
        </span>
      )}

      <img src={car.image} className="h-48 w-full object-cover" />

      <div className="p-5">
        <h3 className="font-bold text-lg">{car.name}</h3>

        <div className="flex items-center gap-2 text-sm mt-1">
          <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
          {car.rating} ({car.reviews}+)
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <span className="flex items-center gap-1"><Users size={14}/> {car.seats}</span>
          <span>{car.transmission}</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">${car.price}/day</span>
          <Link
            href={`/booking?id=${car.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
