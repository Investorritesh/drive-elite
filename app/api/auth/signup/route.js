import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        await dbConnect();
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json({ success: false, message: 'Please provide all fields' }, { status: 400 });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
        });

        // Create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
        });

        const response = NextResponse.json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        }, { status: 201 });

        // Set cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Register Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
