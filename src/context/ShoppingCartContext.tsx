import { createContext, ReactNode, useContext, useEffect, useState } from "react"
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
  cartQuantity: number
  changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void
  removeCartItem: (cartItemId: number) => void
  cartValueTotal: number
}

const COFFEE_ITEMS_LOCALSTORAGE_KEY = 'coffeeDelivery: cartItems'

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
} 

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_LOCALSTORAGE_KEY)
    if (storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  const cartValueTotal = cartItems.reduce((total, cartItem) => {
    return total += cartItem.price * cartItem.quantity
  }, 0)
  const cartQuantity = cartItems.length

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

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart];
        draft[coffeeAlreadyExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_LOCALSTORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <ShoppingCartContext.Provider 
      value={{ 
        cartItems, 
        addCoffeeToCart, 
        cartQuantity, 
        changeCartItemQuantity,
        removeCartItem,
        cartValueTotal
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

