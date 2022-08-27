import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { QuantityCoffeeContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityCoffee({  onIncrease, onDecrease, quantity}: QuantityInputProps) {
  return (
    <QuantityCoffeeContainer>
      <button type="button"  disabled={quantity <= 1} onClick={onDecrease}><Minus size={14} weight="bold"/></button>
      <strong>{quantity}</strong>
      <button type="button" onClick={onIncrease}><Plus size={14} weight="bold"/></button>
    </QuantityCoffeeContainer>
  )
}