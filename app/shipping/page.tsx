import { Navbar } from '@/components/navbar'

export default function Shipping() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Shipping Information</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Shipping Process</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
              <p className="text-gray-600">
                Orders are processed within 1-2 business days. We carefully prepare each fish for shipping, ensuring they are healthy and ready for transport.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Shipping Methods</h3>
              <p className="text-gray-600">
                We use overnight shipping via FedEx or UPS to ensure your fish arrive quickly and safely. All shipments include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                <li>Insulated packaging</li>
                <li>Heat or cold packs as needed</li>
                <li>Oxygen-rich water</li>
                <li>Secure containers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping Rates</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Standard Shipping (1-2 days)</span>
                <span className="font-semibold">$39.99</span>
              </li>
              <li className="flex justify-between">
                <span>Express Shipping (Next day)</span>
                <span className="font-semibold">$59.99</span>
              </li>
              <li className="flex justify-between">
                <span>Local Pickup (Arizona only)</span>
                <span className="font-semibold">Free</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Shipping Schedule</h2>
            <p className="text-gray-600 mb-4">
              We ship Monday through Wednesday to ensure your fish arrive before the weekend. Orders placed after Wednesday will be shipped the following Monday.
            </p>
            <p className="text-gray-600">
              During extreme weather conditions, we may delay shipping to ensure the safety of your fish. We will contact you if this occurs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Live Arrival Guarantee</h2>
          <p className="text-gray-600 mb-4">
            We guarantee live arrival of all fish. If your fish arrives deceased, please contact us within 2 hours of delivery with clear photos of the unopened bag. We will either replace the fish or issue a refund.
          </p>
          <p className="text-gray-600">
            To ensure the best chance of survival, please be available to receive your shipment and acclimate the fish immediately upon arrival.
          </p>
        </div>
      </div>
    </main>
  )
} 