'use client'

import { CartProvider } from '@/lib/cart-context'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
