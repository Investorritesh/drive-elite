import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this car.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    segment: {
        type: String,
        required: [true, 'Please specify the segment (economy, luxury, suv, sports, electric).'],
        enum: ['economy', 'luxury', 'suv', 'sports', 'electric'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price per day.'],
    },
    rating: {
        type: Number,
        default: 0,
    },
    reviews: {
        type: Number,
        default: 0,
    },
    seats: {
        type: Number,
        required: [true, 'Please specify the number of seats.'],
    },
    transmission: {
        type: String,
        required: [true, 'Please specify the transmission type.'],
    },
    badge: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: [true, 'Please provide an image URL.'],
    },
}, {
    timestamps: true,
});

export default mongoose.models.Car || mongoose.model('Car', CarSchema);
