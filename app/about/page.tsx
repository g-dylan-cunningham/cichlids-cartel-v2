import Image from 'next/image'
import { Navbar } from '@/components/navbar'

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Cichlids Cartel of Arizona</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96">
            <Image
              src="/breeding-facility.jpg"
              alt="Our Breeding Facility"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, Cichlids Cartel of Arizona began as a passion project by our founder, who has been breeding African Cichlids for over 20 years. What started as a small home-based operation has grown into one of Arizona's premier African Cichlid breeders.
            </p>
            <p className="text-gray-600">
              Our mission is to provide hobbyists with the highest quality African Cichlids, bred and raised with the utmost care and attention to detail. We take pride in our breeding program, which focuses on maintaining strong genetics and vibrant coloration in all our fish.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We maintain the highest standards in breeding and care, ensuring healthy, vibrant fish for our customers.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">We're committed to educating our customers about proper cichlid care and aquarium maintenance.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Our breeding practices focus on sustainability and conservation of these beautiful species.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Our Facility</h2>
          <p className="text-gray-600 mb-6">
            We welcome visitors to our facility in Arizona. Come see our breeding operation and meet our team of passionate cichlid enthusiasts.
          </p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  )
} 