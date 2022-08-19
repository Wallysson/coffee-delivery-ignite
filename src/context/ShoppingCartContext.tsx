import { createContext, ReactNode, useContext, useState } from "react"

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  getItem: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
} 

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function getItem(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 1
  }

  function increaseItemQuantity(id: number) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.id === id) == null) {
        return [...currentItem, {
          id,
          quantity: 1
        }]
      } else {
        return currentItem.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.id === id)?.quantity === 1) {
        return currentItem.filter(item => item.id !== id)
      } else {
        return currentItem.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity -1
            }
          } else {
            return item
          }
        })
      }
    })
  }


  return (
    <ShoppingCartContext.Provider value={{getItem, increaseItemQuantity, decreaseItemQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}