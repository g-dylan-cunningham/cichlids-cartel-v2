import { Fish } from "@/lib/types";
// const endpoint = "https://script.google.com/macros/s/AKfycbzsBeGY1VqyDIzsNNaGiCcsNzERAavvkBohGFaJdTgxwRDltE9UzvZiHCzODKszYmU-jw/exec";

interface Species {
  species: string;
  commonName: string;
  category: string;
  images: string[];
  items: {
    sku_id: string;
    size: string;
    price: number;
    sex: string;
  }[];
}

export async function getFishStock(): Promise<Species[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_CMS_API
    if (!apiUrl) {
      throw new Error('CMS API URL is not configured')
    }

    console.log('Fetching from URL:', apiUrl)

    const response = await fetch(apiUrl+"?route=stock", { 
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`)
    }

    const contentType = response.headers.get('content-type')
    if (!contentType?.includes('application/json')) {
      const text = await response.text()
      throw new Error(`Unexpected content type: ${contentType}`)
    }

    const data = await response.json()
    console.log('Raw API response (first 3 items):', JSON.stringify({
      ...data,
      data: data.data?.slice(0, 3)
    }, null, 2))

    if (!data.data) {
      throw new Error('Invalid data format: missing data property')
    }

    // Filter out invalid species
    const validSpecies = data.data.filter((species: any) => 
      species && 
      species.species && 
      species.commonName && 
      species.items?.length > 0 &&
      species.images?.length > 0
    )

    console.log('Processed species data (first 3 items):', JSON.stringify(validSpecies.slice(0, 3), null, 2))
    return validSpecies
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

export async function getSpeciesById(id: string): Promise<Species | null> {
  try {
    const speciesList = await getFishStock()
    const species = speciesList.find(s => 
      s.species.toLowerCase().replace(/\s+/g, '-') === id
    )
    return species || null
  } catch (error) {
    console.error('Error fetching species:', error)
    return null
  }
} 
