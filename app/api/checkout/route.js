import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  // Demo credentials
  if (email === 'test@elite.com' && password === '123456') {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
