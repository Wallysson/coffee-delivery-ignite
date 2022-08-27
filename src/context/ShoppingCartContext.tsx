import { createContext, ReactNode, useContext, useState } from "react"
import { CoffeeItemsProps } from "../pages/Home/components/CoffeeCards"
import { produce } from 'immer'

interface ShoppingCartProviderProps {
  children: ReactNode
}

export interface CartItem extends CoffeeItemsProps {
  quantity: number
}

type ShoppingCartContextProps = {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
} 

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  console.log(cartItems)

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addCoffeeToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

