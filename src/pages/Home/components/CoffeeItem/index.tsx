import { ShoppingCart } from "phosphor-react";
import { QuantityCoffee } from "../../../../components/QuantityCoffee";
import { AddCartShopping, CoffeeBuyContainer, CoffeeImage, CoffeeItemContainer, CoffeeTag, CoffeeTitle, PriceContainer } from "./styles";

interface CoffeeItemsProps {
  id: number 
  name: string
  description: string
  price: number
  image: string
  tags: string[]

}

export function CoffeeItem({id, name, description, price, image, tags} : CoffeeItemsProps) {
  return (
    <CoffeeItemContainer>
      <CoffeeImage src={image} alt={name}/>
      <CoffeeTag>
        {tags.map(item => (
          <li key={item}>{item}</li>
        ))}
      </CoffeeTag>
      <CoffeeTitle>
        <h4>{name}</h4>
        <span>{description}</span>
      </CoffeeTitle>

      <CoffeeBuyContainer>
        <PriceContainer>
          <span>R$</span>
          <strong>{price}</strong>
        </PriceContainer>
        <QuantityCoffee />
        <AddCartShopping>
          <ShoppingCart size={22} color={'white'} weight="fill" />
        </AddCartShopping>
      </CoffeeBuyContainer>
    </CoffeeItemContainer>
  )
}