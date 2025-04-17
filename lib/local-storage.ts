const CART_STORAGE_KEY = 'cichlidStock'

interface CartState {
  [id: string]: number
}

export function initializeCart(): CartState {
  if (typeof window === 'undefined') return {}
  
  const storedCart = localStorage.getItem(CART_STORAGE_KEY)
  return storedCart ? JSON.parse(storedCart) : {}
}

export function updateCartItem(id: string, quantity: number): CartState {
  if (typeof window === 'undefined') return {}
  
  const currentCart = initializeCart()
  const updatedCart = { ...currentCart }
  
  if (quantity <= 0) {
    delete updatedCart[id]
  } else {
    updatedCart[id] = quantity
  }
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart))
  return updatedCart
}

export function getCartItemQuantity(id: string): number {
  if (typeof window === 'undefined') return 0
  
  const cart = initializeCart()
  return cart[id] || 0
}

export function clearCart(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(CART_STORAGE_KEY)
} 