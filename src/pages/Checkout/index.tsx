import { CoffeeSelected } from "./components/CoffeeSelected";
import { OrderCheckout } from "./components/OrderCheckout";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <OrderCheckout />
      <CoffeeSelected />
    </CheckoutContainer>
  )
}