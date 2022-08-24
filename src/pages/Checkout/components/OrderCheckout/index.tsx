import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Input } from "../../../../components/Input";
import { defaultTheme } from "../../../../styles/themes/default";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { AddressContainer, PaymentAddressContainerHeader, PaymentAndAddressContainer, ContainerBackground, PaymentOptionsContainer } from "./styles";

export function OrderCheckout() {
  return (
    <PaymentAndAddressContainer>
    <h2>Complete seu pedido</h2>
      <ContainerBackground>
        <PaymentAddressContainerHeader>
          <MapPinLine size={22} color={defaultTheme["yellow-dark"]}/>
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </PaymentAddressContainerHeader>

        <AddressContainer>
          <Input placeholder="CEP" type="number" className="zip"/>
          <Input placeholder="Rua"className="street"/>
          <Input placeholder="Número" type="number"/>
          <Input placeholder="Complemento" className="complement"/>
          <Input placeholder="Bairro"/>
          <Input placeholder="Cidade"/>
          <Input placeholder="UF"/>
        </AddressContainer>
      </ContainerBackground>

      <ContainerBackground>
      <PaymentAddressContainerHeader>
          <CurrencyDollar size={22} color={defaultTheme["purple-dark"]}/>
          <div>
            <span>Endereço de Entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </PaymentAddressContainerHeader>

        <PaymentOptionsContainer>
          <PaymentMethodInput>
            <CreditCard />
            <span>Cartão de Crédito</span>
          </PaymentMethodInput>

          <PaymentMethodInput>
            <Money />
            <span>Cartão de Débito</span>
          </PaymentMethodInput>

          <PaymentMethodInput>
            <Money />
            <span>Dinheiro</span>
          </PaymentMethodInput>
        </PaymentOptionsContainer>
      </ContainerBackground>
    </PaymentAndAddressContainer>
  )
}