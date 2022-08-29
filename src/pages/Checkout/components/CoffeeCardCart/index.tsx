import { Trash } from "phosphor-react";
import { QuantityCoffee } from "../../../../components/QuantityCoffee";
import { CartItem } from "../../../../context/ShoppingCartContext";
import { useCart } from "../../../../hooks/useShoppingCart";
import { formatMoney } from "../../../../utils/FormatCurrency";
import { ButtonsActionsContainer, CoffeeCardCartContainer, RemoveButton, TitleCoffeeCardCheckout } from "./styles";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCardCart({coffee}: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCoffee() {
    removeCartItem(coffee.id)
  }


  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeeCardCartContainer>
      <div>
        <img src={coffee.image}/>
        <div>
          <TitleCoffeeCardCheckout>
            {coffee.name}
          </TitleCoffeeCardCheckout>
          <ButtonsActionsContainer>
            <QuantityCoffee 
              quantity={coffee.quantity} 
              onIncrease={handleIncrease} 
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemoveCoffee}>
              <Trash size={16}/>
              Remover
            </RemoveButton>
          </ButtonsActionsContainer>
        </div>
      </div>

      <span>{formattedPrice}</span>
    </CoffeeCardCartContainer>
  )
}