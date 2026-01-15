import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Car from '@/models/Car';

export async function GET(request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const segment = searchParams.get('segment');

        let query = {};
        if (segment && segment !== 'all') {
            query.segment = segment;
        }

        const cars = await Car.find(query).sort({ createdAt: -1 });

        return NextResponse.json({ success: true, data: cars });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch cars' },
            { status: 500 }
        );
    }
}

// POST to add a new car (Optional/Admin)
export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const car = await Car.create(body);
        return NextResponse.json({ success: true, data: car }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 400 }
        );
    }
}
