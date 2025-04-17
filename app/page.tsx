import Image from 'next/image'
import { Navbar } from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full">
          <Image
            src="/images/cartel.png"
            alt="Featured African Cichlid"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Cichlids Cartel of Arizona</h1>
              <p className="text-xl mb-8">Premium African Cichlids for Your Aquarium</p>
              <a href="/stock" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Our Stock
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">We breed and raise only the highest quality African Cichlids, ensuring vibrant colors and healthy specimens.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="text-gray-600">Our fish are raised with expert care and attention to detail, following best practices in aquaculture.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Nationwide Shipping</h3>
              <p className="text-gray-600">We safely ship our fish nationwide, ensuring they arrive healthy and ready for your aquarium.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Cichlid Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">Browse our selection of premium African Cichlids and find the perfect additions to your aquarium.</p>
            <a href="/stock" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Explore Our Collection
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
