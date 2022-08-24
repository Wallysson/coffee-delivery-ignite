import { CreditCard } from "phosphor-react";
import { PaymentMethodContainer } from "./style";

export interface AuxProps  { 
  children: React.ReactNode
}

export function PaymentMethodInput({children}: AuxProps) {
  return (
    <PaymentMethodContainer>
      {children}
    </PaymentMethodContainer>
  )
}