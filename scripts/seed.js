const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Define Schema for the script (avoiding ES modules issues in standalone node script)
const CarSchema = new mongoose.Schema({
    name: String,
    segment: String,
    price: Number,
    rating: Number,
    reviews: Number,
    seats: Number,
    transmission: String,
    badge: String,
    image: String,
});

const Car = mongoose.models.Car || mongoose.model('Car', CarSchema);

const cars = [
    /* ================= LUXURY ================= */
    {
        name: 'Mercedes-Benz S-Class',
        segment: 'luxury',
        price: 210,
        rating: 5.0,
        reviews: 450,
        seats: 5,
        transmission: 'Automatic',
        badge: 'Flagship',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000',
    },
    {
        name: 'BMW 7 Series',
        segment: 'luxury',
        price: 189,
        rating: 4.9,
        reviews: 320,
        seats: 5,
        transmission: 'Automatic',
        badge: 'Executive',
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
    },

    /* ================= SUV ================= */
    {
        name: 'Lamborghini Urus',
        segment: 'suv',
        price: 450,
        rating: 5.0,
        reviews: 78,
        seats: 5,
        transmission: 'Automatic',
        badge: 'Super SUV',
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000',
    },
    {
        name: 'Mercedes G-Wagon',
        segment: 'suv',
        price: 320,
        rating: 4.9,
        reviews: 290,
        seats: 5,
        transmission: 'Automatic',
        badge: 'Iconic',
        image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=1000',
    },

    /* ================= SPORTS ================= */
    {
        name: 'Porsche 911 GT3',
        segment: 'sports',
        price: 380,
        rating: 5.0,
        reviews: 124,
        seats: 2,
        transmission: 'PDK',
        badge: 'Track Ready',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
    },
    {
        name: 'Ferrari F8 Tributo',
        segment: 'sports',
        price: 650,
        rating: 5.0,
        reviews: 56,
        seats: 2,
        transmission: 'Automatic',
        badge: 'V8 Turbo',
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1000',
    },

    /* ================= ELECTRIC ================= */
    {
        name: 'Lucid Air Sapphire',
        segment: 'electric',
        price: 220,
        rating: 5.0,
        reviews: 34,
        seats: 5,
        transmission: 'Automatic',
        badge: 'Highest Range',
        image: 'https://i.pinimg.com/1200x/b1/28/e8/b128e8fd14836156ae57e07e62a6e0bd.jpg',
    },
    {
        name: 'Porsche Taycan Turbo S',
        segment: 'electric',
        price: 215,
        rating: 4.9,
        reviews: 167,
        seats: 4,
        transmission: 'Automatic',
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000',
    },
];

async function seed() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('MONGODB_URI is not defined in .env.local');
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

        await Car.deleteMany({});
        console.log('Cleared existing cars');

        await Car.insertMany(cars);
        console.log('Seeded database with curated cars');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seed();
