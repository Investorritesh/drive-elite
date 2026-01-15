import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    userEmail: {
        type: String,
        required: [true, 'Please provide an email for the booking.'],
    },
    pickupLocation: {
        type: String,
        required: [true, 'Please provide a pickup location.'],
    },
    pickupDate: {
        type: Date,
        required: [true, 'Please provide a pickup date.'],
    },
    returnDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending',
    },
    totalPrice: {
        type: Number,
        required: false,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
