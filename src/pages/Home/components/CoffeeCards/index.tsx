import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityCoffee } from "../../../../components/QuantityCoffee";
import { useShoppingCart } from "../../../../context/ShoppingCartContext";
import { AddCartShopping, CoffeeBuyContainer, CoffeeImage, CoffeeItemContainer, CoffeeTag, CoffeeTitle, PriceContainer } from "./styles";
import { formatMoney } from "../../../../utils/FormatCurrency";

export interface CoffeeItemsProps {
  id: number 
  name: string
  description: string
  price: number
  image: string
  tags: string[]
}

interface CoffeeProps {
  coffee: CoffeeItemsProps;
}

export function CoffeeCards({coffee}: CoffeeProps) {
  const { addCoffeeToCart } = useShoppingCart();
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatMoney(coffee.price)

  function handleIncreaseCoffee() {
    setQuantity((state) => state + 1);
  }

  function handleDecreaseCoffee() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeItemContainer>
      <CoffeeImage src={coffee.image} />
      <CoffeeTag>
      {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </CoffeeTag>
      <CoffeeTitle>
        <h4>{coffee.name}</h4>
        <span>{coffee.description}</span>
      </CoffeeTitle>

      <CoffeeBuyContainer>
        <PriceContainer>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
        </PriceContainer>
        <QuantityCoffee 
          quantity={quantity} 
          onIncrease={handleIncreaseCoffee}
          onDecrease={handleDecreaseCoffee}
        />
        <AddCartShopping onClick={handleAddToCart}>
          <ShoppingCart size={22} color={'white'} weight="fill" />
        </AddCartShopping>
      </CoffeeBuyContainer>
    </CoffeeItemContainer>
  )
}