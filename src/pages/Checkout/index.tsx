import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { AddressContainer, AddressContainerHeader, CheckoutContainer, PaymentAndAddressContainer } from "./styles";
import { useForm } from 'react-hook-form'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">    
        <PaymentAndAddressContainer>
          <h2>Complete seu pedido</h2>
            <AddressContainer>
              <AddressContainerHeader>
                <MapPinLine size={22} color={defaultTheme["yellow-dark"]}/>
                <div>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </AddressContainerHeader>

              <div>
                <input type="number" placeholder="CEP" />
                <input type="text" placeholder="Rua" />
                <input type="number"placeholder="Número" />
                <input type="text" placeholder="Complemento" />
                <input type="text" placeholder="Bairro" />
                <input type="text" placeholder="Cidade" />
              </div>
            </AddressContainer>
          </PaymentAndAddressContainer>
        </form>
      </CheckoutContainer>
  )
}