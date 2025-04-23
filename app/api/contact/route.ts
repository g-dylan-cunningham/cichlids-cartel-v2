import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

const CMS_API = process.env.CMS_API

if (!CMS_API) {
  throw new Error('CMS_API environment variable is not defined')
}

const apiUrl = CMS_API + '?sheetName=inquiry' as string

export async function POST(request: Request) {
  try {
    console.log('Contact form submission received')
    const { email, message } = await request.json()
    console.log('Request body:', { email, message })
    
    const body = JSON.stringify({
      inquiry_id: uuidv4(),
      date: new Date().toLocaleString(),
      email,
      message
    })
    console.log('Prepared data for CMS:', JSON.parse(body))

    console.log('Sending request to CMS API:', {
      url: apiUrl,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

    console.log('CMS API response status:', response.status)
    const responseData = await response.json()
    console.log('CMS API response data:', responseData)

    if (!response.ok) {
      throw new Error('Failed to submit inquiry')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
} 