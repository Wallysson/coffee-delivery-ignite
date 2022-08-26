import { CoffeeCardCart } from "../CoffeeCardCart";
import { ConfirmationSection } from "./ConfirmationSection";
import { CoffeeSelectedContainer, ContainerBackground } from "./styles";

export function CoffeeSelected() {
  return (
    <CoffeeSelectedContainer>
      <h2>Cafés selecionados</h2>
      <ContainerBackground>
        <CoffeeCardCart />
        <CoffeeCardCart />
        <CoffeeCardCart />

        <ConfirmationSection />

      </ContainerBackground>
    </CoffeeSelectedContainer>
  )
}

