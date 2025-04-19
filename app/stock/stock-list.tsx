'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { FishImage } from '@/components/fish-image'

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
              <article 
                key={species.species}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative h-64">
                  <FishImage
                    src={species.images[0] || '/images/missing-cichlid.png'}
                    alt={`${species.commonName} - ${species.species}`}
                    fill
                    itemProp="image"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2" itemProp="name">{species.commonName}</h2>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Species:</span> <span itemProp="sku">{species.species}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="font-medium">Category:</span> <span itemProp="category">{species.category}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Sex Options:</span> {Array.from(new Set(species.items.map(item => item.sex))).join(', ')}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">{hasPriceRange ? `$${minPrice} - $${maxPrice}` : `$${minPrice}`}</span>
                      <meta itemProp="priceCurrency" content="USD" />
                      <meta itemProp="availability" content="https://schema.org/InStock" />
                    </span>
                    <Link 
                      href={`/stock/${species.species.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 font-medium"
                      aria-label={`View details for ${species.commonName}`}
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
} 