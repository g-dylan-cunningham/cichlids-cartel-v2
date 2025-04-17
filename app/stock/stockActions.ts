import { Fish } from "@/lib/types";
// const endpoint = "https://script.google.com/macros/s/AKfycbzsBeGY1VqyDIzsNNaGiCcsNzERAavvkBohGFaJdTgxwRDltE9UzvZiHCzODKszYmU-jw/exec";

export async function getFishStock(): Promise<Fish[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_CMS_API
    if (!apiUrl) {
      throw new Error('CMS API URL is not configured')
    }

    console.log('Fetching from URL:', apiUrl) // Debug log

    const response = await fetch(apiUrl+"?route=stock", { 
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
      }
    })

    console.log('Response status:', response.status) // Debug log
    console.log('Response headers:', Object.fromEntries(response.headers.entries())) // Debug log

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error Response:', errorText) // Debug log
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      const text = await response.text()
      console.error('Unexpected content type:', contentType)
      console.error('Response body:', text)
      throw new Error(`Unexpected content type: ${contentType}`)
    }

    const data = await response.json()
    console.log('Raw API response:', data) // Debug log

    if (!data.data) {
      throw new Error('Invalid data format: missing data property')
    }

    // Filter out any empty or invalid items
    const validFish = data.data.filter((fish: any) => 
      fish && 
      fish.Species && 
      fish.id &&
      fish.CommonName && 
      fish.Price !== undefined
    )

    console.log('Processed fish data:', validFish) // Debug log
    return validFish
  } catch (error) {
    console.error('Error fetching fish stock:', error)
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      })
    }
    return []
  }
} 