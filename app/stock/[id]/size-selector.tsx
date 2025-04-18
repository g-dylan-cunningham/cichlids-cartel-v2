'use client'

import { useCart } from '@/lib/cart-context'
import { useState } from 'react'

interface SizeSelectorProps {
  species: {
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
}

export function SizeSelector({ species }: SizeSelectorProps) {
  const { addToCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState<{ [key: string]: boolean }>({})

  const handleAddToCart = async (size: string, price: number, sex: string, sku_id: string) => {
    if (isSubmitting[size]) return
    
    setIsSubmitting(prev => ({ ...prev, [size]: true }))
    try {
      const fish = {
        id: sku_id,
        date: new Date().toISOString().split('T')[0],
        category: species.category,
        species: species.species,
        commonName: species.commonName,
        size: size,
        sex: sex || 'Unsexed',
        price: price,
        image: species.images[0],
        sku_id: sku_id
      }
      addToCart(fish)
    } finally {
      setIsSubmitting(prev => ({ ...prev, [size]: false }))
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Available Sizes</h2>
      <div className="grid grid-cols-1 gap-4">
        {species.items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">{item.size}</p>
                <p className="text-sm text-gray-500">
                  Sex: {item.sex || 'Unsexed'}
                </p>
                <p className="text-2xl font-bold text-blue-600">${item.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(item.size, item.price, item.sex || 'Unsexed', item.sku_id)}
                disabled={isSubmitting[item.size]}
                className={`bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors ${
                  isSubmitting[item.size] ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting[item.size] ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 