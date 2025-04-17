'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [showDialog, setShowDialog] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit message')
      }

      setFormData({ email: '', message: '' })
      setShowDialog(true)
    } catch (error) {
      console.error('Error submitting message:', error)
      alert('Failed to submit message. Please try again.')
    }
  }

  const handleDialogClose = () => {
    setShowDialog(false)
    router.push('/')
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions about our fish or need assistance? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              At Cichlids Cartel, we're passionate about providing the highest quality fish and excellent customer service. Whether you have questions about our stock, need advice on fish care, or want to discuss a custom order, we're here to help.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9am - 5pm MST</p>
                <p className="text-gray-600">Saturday: 10am - 3pm MST</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">Contact Information</h3>
                <p className="text-gray-600">Email: info@cichlidscartel.com</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. We will get back to you soon.
            </p>
            <button
              onClick={handleDialogClose}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      )}
    </main>
  )
} 