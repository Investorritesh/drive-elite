const segments = [
  { id: 'all', label: 'All' },
  { id: 'economy', label: 'Economy' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'suv', label: 'SUV' },
  { id: 'sports', label: 'Sports' },
  { id: 'electric', label: 'Electric' },
];

export default function SegmentFilter({ active, setActive }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {segments.map(seg => (
        <button
          key={seg.id}
          onClick={() => setActive(seg.id)}
          className={`px-6 py-2 rounded-full font-medium transition ${
            active === seg.id
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          {seg.label}
        </button>
      ))}
    </div>
  );
}
