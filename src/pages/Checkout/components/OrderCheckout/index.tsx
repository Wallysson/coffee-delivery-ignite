import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { defaultTheme } from "../../../../styles/themes/default";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { AddressContainer, PaymentAddressContainerHeader, PaymentAndAddressContainer, ContainerBackground, PaymentOptionsContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function OrderCheckout() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

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
          <Input 
            placeholder="CEP" 
            type="number" 
            className="zip" 
            {...register("cep")}
            error={errors.cep?.message}
          />
          <Input 
            placeholder="Rua"
            className="street"
            {...register("street")}
            error={errors.street?.message}
          />
          <Input 
            placeholder="Número" 
            type="number"
            {...register("number")}
            error={errors.number?.message}
          />
          <Input 
            placeholder="Complemento" 
            className="complement"
            {...register("complement")}
            error={errors.complement?.message}
          />
          <Input 
            placeholder="Bairro" 
            {...register("district")}
            error={errors.district?.message} 
          />
          <Input 
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message} 
          />
          <Input 
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message} 
          />
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
          <PaymentMethodOptions />
        </PaymentOptionsContainer>
      </ContainerBackground>
    </PaymentAndAddressContainer>
  )
}