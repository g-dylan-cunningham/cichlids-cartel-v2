'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Fish } from '@/lib/types'
import { initializeCart, updateCartItem, getCartItemQuantity, clearCart as clearLocalStorage } from './local-storage'
import { getFishStock } from '@/app/stock/stockActions'
// import { getFishStock } from './fish'

interface CartItem extends Fish {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (fish: Fish) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  refreshCart: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date())

  // Initial cart setup
  const initializeCartData = async () => {
    try {
      const storedCart = initializeCart()
      const fishStock = await getFishStock()
      
      const cartItems = Object.entries(storedCart)
        .map(([id, quantity]) => {
          const fish = fishStock.find(f => f.id === id)
          if (!fish) return null
          return { ...fish, quantity }
        })
        .filter((item): item is CartItem => item !== null)
      
      setItems(cartItems)
    } catch (error) {
      console.error('Error initializing cart:', error)
      setItems([])
    }
  }

  // Periodic refresh function
  const refreshCart = async () => {
    try {
      const storedCart = initializeCart()
      const fishStock = await getFishStock()
      
      const cartItems = Object.entries(storedCart)
        .map(([id, quantity]) => {
          const fish = fishStock.find(f => f.id === id)
          if (!fish) return null
          return { ...fish, quantity }
        })
        .filter((item): item is CartItem => item !== null)
      
      setItems(cartItems)
      setLastRefresh(new Date())
    } catch (error) {
      console.error('Error refreshing cart:', error)
    }
  }

  // Initialize cart from localStorage on mount
  useEffect(() => {
    initializeCartData()
  }, [])

  // Refresh cart data every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const minutesSinceLastRefresh = (now.getTime() - lastRefresh.getTime()) / (1000 * 60)
      
      if (minutesSinceLastRefresh >= 5) {
        refreshCart()
      }
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [lastRefresh])

  const addToCart = (fish: Fish) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === fish.id)
      const newQuantity = (existingItem?.quantity || 0) + 1
      
      // Update localStorage
      updateCartItem(fish.id, newQuantity)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === fish.id
            ? { ...item, quantity: newQuantity }
            : item
        )
      }
      
      return [...currentItems, { ...fish, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems(currentItems => {
      updateCartItem(id, 0)
      return currentItems.filter(item => item.id !== id)
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }

    setItems(currentItems => {
      updateCartItem(id, quantity)
      return currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    })
  }

  const clearCart = () => {
    setItems([])
    clearLocalStorage()
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = items.reduce((total, item) => total + (item.Price * item.quantity), 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 