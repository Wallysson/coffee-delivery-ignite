import { useCart } from "../../../../hooks/useShoppingCart";
import { CoffeeCardCart } from "../CoffeeCardCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { CoffeeSelectedContainer, ContainerBackground } from "./styles";

export function CoffeeSelected() {
  const { cartItems } = useCart()

  return (
    <CoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <ContainerBackground>
        {/* <CoffeeCardCart /> */}
        {cartItems.map((item) => (
          <CoffeeCardCart key={item.id} coffee={item}/>
        ))}
        <ConfirmationSection />

      </ContainerBackground>
    </CoffeeSelectedContainer>
  )
}

