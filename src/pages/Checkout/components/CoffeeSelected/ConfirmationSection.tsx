import { ButtonConfirmOrder } from "../../../../components/ButtonConfirmOrder";
import { useCart } from "../../../../hooks/useShoppingCart";
import { formatMoney } from "../../../../utils/FormatCurrency";
import { ConfirmationSectionContainer } from "../CoffeeCardCart/styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartValueTotal, cartQuantity } = useCart()
  const cartTotal = cartValueTotal + DELIVERY_PRICE

  const formattedItemsTotal = formatMoney(cartValueTotal)
  const formattedCardTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <span className="label">Total de Itens</span>
        <span>R$ {formattedItemsTotal}</span>
      </div>
      <div>
        <span className="label">Entrega</span>
        <span>R$ {formatDeliveryPrice}</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ {formattedCardTotal}</strong>
      </div>

      <ButtonConfirmOrder 
        text="Confirmar pedido" 
        disabled={cartQuantity <= 0}  
      />

    </ConfirmationSectionContainer>
  )
}