'use client'

import { useCart } from '@/lib/cart-context'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any fish to your cart yet.</p>
            <Link
              href="/stock"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Our Stock
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative h-20 w-20 sm:h-32 sm:w-32 flex-shrink-0">
                    <Image
                      src={item.image || '/images/placeholder.jpg'}
                      alt={item.commonName}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h2 className="text-lg font-semibold truncate">{item.commonName}</h2>
                    <p className="text-sm text-gray-500 truncate">{item.species}</p>
                    <p className="text-sm text-gray-500">Size: {item.items[0].size}</p>
                    <p className="text-sm text-gray-500">Sex: {item.items[0].sex}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 border border-gray-300 rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 border border-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-blue-600 mt-2">
                      ${item.items[0].price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <Link
                  href="/checkout"
                  className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={clearCart}
                  className="block w-full text-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 