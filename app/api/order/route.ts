import { NextResponse } from 'next/server'

const NEXT_PUBLIC_CMS_API = process.env.NEXT_PUBLIC_CMS_API

if (!NEXT_PUBLIC_CMS_API) {
  throw new Error('NEXT_PUBLIC_CMS_API environment variable is not defined')
}

// After validation, we can safely assert it's a string
const apiUrl = NEXT_PUBLIC_CMS_API + '?sheetName=orders' as string

export async function POST(request: Request) {
  try {
    const orderData = await request.json();
    const body = JSON.stringify(orderData);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    console.log("POST ?sheetName=orders request info:", {
      url: apiUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (!response.ok) {
      throw new Error('Failed to submit order')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting order:', error)
    return NextResponse.json(
      { error: 'Failed to submit order' },
      { status: 500 }
    )
  }
}