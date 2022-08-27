import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export function useCart() {
  const context = useContext(ShoppingCartContext);
  return context;
}