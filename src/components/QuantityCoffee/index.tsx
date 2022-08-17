import { Minus, Plus } from 'phosphor-react'
import { QuantityCoffeeContainer } from './styles'

export function QuantityCoffee() {
  return (
    <QuantityCoffeeContainer>
      <button type="button"><Minus size={14} weight="bold"/></button>
      <strong>1</strong>
      <button type="button"><Plus size={14} weight="bold"/></button>
    </QuantityCoffeeContainer>
  )
}