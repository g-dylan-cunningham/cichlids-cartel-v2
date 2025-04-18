import { getSpeciesById } from '../stockActions'
import { Navbar } from '@/components/navbar'
import { SizeSelector } from './size-selector'
import { ImageCarousel } from './image-carousel'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function SpeciesPage({ params }: PageProps) {
  const resolvedParams = await params
  const species = await getSpeciesById(resolvedParams.id)
  if (!species) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Species Not Found</h1>
            <p className="text-gray-600">The requested species could not be found.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="sm:hidden mb-6">
          <Link
            href="/stock"
            className="inline-flex items-center text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Stock
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <ImageCarousel 
            images={species.images} 
            commonName={species.commonName} 
          />

          {/* Species Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{species.commonName}</h1>
              <p className="text-xl text-gray-600 mt-2">{species.species}</p>
              <p className="text-lg text-gray-500 mt-1">Category: {species.category}</p>
            </div>

            <SizeSelector species={species} />
          </div>
        </div>
      </div>
    </main>
  )
} 