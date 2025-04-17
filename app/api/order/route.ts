import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const NEXT_PUBLIC_CMS_API = process.env.NEXT_PUBLIC_CMS_API

if (!NEXT_PUBLIC_CMS_API) {
  throw new Error('NEXT_PUBLIC_CMS_API environment variable is not defined')
}

// After validation, we can safely assert it's a string
const apiUrl = NEXT_PUBLIC_CMS_API + '?sheetName=orders' as string

export async function POST(request: Request) {
  try {
    const orderData = await request.json()
    const orderId = uuidv4()
    
    const body = JSON.stringify({
      ...orderData,
      order_id: orderId
    })

    console.log("POST order request info:", {
      url: apiUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.parse(body)
    })

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })

    if (!response.ok) {
      throw new Error('Failed to submit order')
    }

    return NextResponse.json({ success: true, order_id: orderId })
  } catch (error) {
    console.error('Error submitting order:', error)
    return NextResponse.json(
      { error: 'Failed to submit order' },
      { status: 500 }
    )
  }
}