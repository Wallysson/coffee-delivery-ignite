import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { AddressContainer, AddressContainerHeader, CheckoutContainer, PaymentAndAddressContainer, ContainerBackground, AddressInputZip, AddressInputStreet, AddressInputNumber, AddressInputComplement, AddressInputDistrict, AddressInputCity, AddressInputState, ContainerAddressFlex } from "./styles";
import { useForm } from 'react-hook-form'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="">    
        <PaymentAndAddressContainer>
          <h2>Complete seu pedido</h2>
            <ContainerBackground>
              <AddressContainerHeader>
                <MapPinLine size={22} color={defaultTheme["yellow-dark"]}/>
                <div>
                  <span>Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </AddressContainerHeader>

              <AddressContainer>
                <AddressInputZip type="number" placeholder="CEP" />
                <AddressInputStreet type="text" placeholder="Rua" />
                <ContainerAddressFlex>
                  <AddressInputNumber type="number"placeholder="Número" />
                  <AddressInputComplement type="text" placeholder="Complemento" />
                </ContainerAddressFlex>
                <ContainerAddressFlex>
                  <AddressInputDistrict type="text" placeholder="Bairro" />
                  <AddressInputCity type="text" placeholder="Cidade" />
                  <AddressInputState type="text" placeholder="UF" />
                </ContainerAddressFlex>
              </AddressContainer>
            </ContainerBackground>
          </PaymentAndAddressContainer>
        </form>
      </CheckoutContainer>
  )
}