import { Minus, Plus } from 'phosphor-react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { QuantityCoffeeContainer } from './styles'

interface QuantityCoffeeProps {
  id: number
}

export function QuantityCoffee({id} : QuantityCoffeeProps) {
  const { getItem, decreaseItemQuantity, increaseItemQuantity } = useShoppingCart()
  const quantity = getItem(id)

  return (
    <QuantityCoffeeContainer>
      <button type="button" onClick={() => decreaseItemQuantity(id)}><Minus size={14} weight="bold"/></button>
      <strong>{quantity}</strong>
      <button type="button" onClick={() => increaseItemQuantity(id)}><Plus size={14} weight="bold"/></button>
    </QuantityCoffeeContainer>
  )
}