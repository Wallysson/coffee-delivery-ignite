import { ButtonConfirmOrder } from "../../../../components/ButtonConfirmOrder";
import { ConfirmationSectionContainer } from "../CoffeeCardCart/styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <span className="label">Total de Itens</span>
        <span>R$ 29,70</span>
      </div>
      <div>
        <span className="label">Entrega</span>
        <span >R$ 3,5</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ 33,20</strong>
      </div>

      <ButtonConfirmOrder text="Confirmar pedido" />

    </ConfirmationSectionContainer>
  )
}