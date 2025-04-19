'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FishImage } from '@/components/fish-image'

interface ImageCarouselProps {
  images: string[]
  commonName: string
}

export function ImageCarousel({ images, commonName }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedImage(null)
  }

  if (!images.length) return null

  return (
    <div className="space-y-4">
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
        <FishImage
          src={images[0] || '/images/missing-cichlid.png'}
          alt={commonName}
          fill
          className="object-cover cursor-pointer"
          onClick={() => handleImageClick(images[0])}
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <FishImage
                src={image}
                alt={`${commonName} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-3xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <FishImage
                src={selectedImage}
                alt={commonName}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 