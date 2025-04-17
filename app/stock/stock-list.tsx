'use client'

import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Fish } from '@/lib/types'
import { useCart } from '@/lib/cart-context'

export function StockList({ fishStock }: { fishStock: Fish[] }) {
  const { addToCart } = useCart()

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Available Stock</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishStock.map((fish) => (
            <div key={fish.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                {fish.image && (
                  <Image
                    src={fish.image}
                    alt={fish.CommonName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{fish.CommonName}</h2>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Species:</span> {fish.Species}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Size:</span> {fish.Size}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Sex:</span> {fish.Sex}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Category:</span> {fish.Category}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${fish.Price}</span>
                  <button 
                    onClick={() => addToCart(fish)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 