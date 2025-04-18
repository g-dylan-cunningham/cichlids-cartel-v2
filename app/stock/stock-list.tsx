'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

interface Species {
  species: string;
  commonName: string;
  category: string;
  images: string[];
  items: {
    size: string;
    price: number;
    sex: string;
  }[];
}

export function StockList({ fishStock }: { fishStock: Species[] }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Available Stock</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishStock.map((species) => {
            const minPrice = Math.min(...species.items.map(item => item.price))
            const maxPrice = Math.max(...species.items.map(item => item.price))
            const hasPriceRange = minPrice !== maxPrice

            return (
              <Link 
                key={species.species}
                href={`/stock/${species.species.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  {species.images[0] && (
                    <Image
                      src={species.images[0]}
                      alt={species.commonName}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{species.commonName}</h2>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Species:</span> {species.species}
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Category:</span> {species.category}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Sex Options:</span> {Array.from(new Set(species.items.map(item => item.sex))).join(', ')}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {hasPriceRange ? `$${minPrice} - $${maxPrice}` : `$${minPrice}`}
                    </span>
                    <span className="text-blue-600 font-medium">View Details →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
} 