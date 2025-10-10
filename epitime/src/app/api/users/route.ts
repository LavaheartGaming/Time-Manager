import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  return NextResponse.json({
    id: 1,
    name: 'John Doe',
    phone_number: 1234567890,
    email: 'foo@bar.com'
  })
}
