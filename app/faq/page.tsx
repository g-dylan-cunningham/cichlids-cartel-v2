import { Navbar } from '@/components/navbar'

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {/* Shipping Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do you ship the fish?</h3>
                <p className="text-gray-600">
                  We ship all fish via overnight delivery using FedEx or UPS. Each shipment includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                  <li>Insulated packaging with temperature control</li>
                  <li>Oxygen-rich water in secure bags</li>
                  <li>Heat or cold packs as needed for the season</li>
                  <li>Secure containers to prevent movement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">When do you ship?</h3>
                <p className="text-gray-600">
                  We ship Monday through Wednesday to ensure your fish arrive before the weekend. Orders placed after Wednesday will be shipped the following Monday.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What are your shipping rates?</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                  <li>Standard Shipping (1-2 days): $39.99</li>
                  <li>Express Shipping (Next day): $59.99</li>
                  <li>Local Pickup (Arizona only): Free</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DOA Policy Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Dead on Arrival Policy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What is your DOA policy?</h3>
                <p className="text-gray-600">
                  We guarantee live arrival of all fish. If your fish arrives deceased, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
                  <li>Take clear photos of the unopened bag within 2 hours of delivery</li>
                  <li>Contact us immediately with the photos and order details</li>
                  <li>We will either replace the fish or issue a refund</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if I'm not home to receive the shipment?</h3>
                <p className="text-gray-600">
                  It's crucial that someone is available to receive and acclimate the fish immediately upon arrival. If you won't be home, please arrange for someone to receive the package or contact us to reschedule the delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Male Guarantee Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Male Guarantee</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you guarantee males?</h3>
                <p className="text-gray-600">
                  Yes, we offer a male guarantee on all fish sold as males. If a fish sold as a male turns out to be female, we will replace it or issue a refund. Please provide clear photos showing the fish's characteristics for verification.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How can I tell if my fish is male?</h3>
                <p className="text-gray-600">
                  Male African Cichlids typically show more vibrant colors and develop egg spots on their anal fin. However, some species may not show these characteristics until they mature. If you're unsure, feel free to contact us with photos for assistance.
                </p>
              </div>
            </div>
          </div>

          {/* General Questions */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">General Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I acclimate my new fish?</h3>
                <p className="text-gray-600">
                  We recommend the following acclimation process:
                </p>
                <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
                  <li>Float the unopened bag in your aquarium for 15-20 minutes</li>
                  <li>Open the bag and add small amounts of tank water every 5 minutes for 30 minutes</li>
                  <li>Gently net the fish into your aquarium (do not add the shipping water)</li>
                  <li>Monitor the fish closely for the first 24 hours</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What if I have more questions?</h3>
                <p className="text-gray-600">
                  If you have any additional questions, please don't hesitate to contact us through our contact page. We're happy to help with any concerns about shipping, care, or our policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 