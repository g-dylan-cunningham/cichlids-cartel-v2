'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageCarouselProps {
  images: string[];
  commonName: string;
}

export function ImageCarousel({ images, commonName }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const handleCloseModal = (e: React.MouseEvent) => {
    // Only close if clicking the overlay or close button
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('button')) {
      setSelectedImage(null)
    }
  }

  return (
    <>
      {/* Main Image */}
      <div className="relative h-[500px] rounded-lg overflow-hidden">
        <Image
          src={images[0]}
          alt={commonName}
          fill
          className="object-cover cursor-pointer"
          priority
          onClick={() => handleImageClick(images[0])}
        />
      </div>

      {/* Additional Images Grid */}
      <div className="pt-6 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Additional Images</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.slice(1).map((image, index) => (
            <div 
              key={index} 
              className="relative h-32 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`${commonName} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2"
              aria-label="Close image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
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
    </>
  )
} 