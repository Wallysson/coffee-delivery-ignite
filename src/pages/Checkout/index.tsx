import { CoffeeSelected } from "./components/CoffeeSelected"
import { OrderCheckout } from "./components/OrderCheckout"
import { CheckoutContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useShoppingCart"

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money"
}

const confirmOrderFormValidationScheme = zod.object({
  cep: zod.string().min(1, "Verifique seu cep"),
  street: zod.string().min(1, "Verifique seu street"),
  number: zod.string().min(1, "Verifique seu number"),
  complement: zod.string(),
  district: zod.string().min(1, "Verifique seu district"),
  city: zod.string().min(1, "Verifique seu city"),
  uf: zod.string().min(2, "Verifique seu uf"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap:() => {
      return {message: "Verificar método de pagamento"}
    }
  })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationScheme>

type ConfirmOrderFormData = OrderData;

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationScheme)
  })

  const { clearCart } = useCart()
  const { handleSubmit } = confirmOrderForm
  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/orderComplete', {
      state: data
    })
    clearCart()
  }

  return (
    <FormProvider {...confirmOrderForm} >
      <CheckoutContainer 
        className="container" 
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <OrderCheckout />
        <CoffeeSelected />
      </CheckoutContainer>
    </FormProvider>
  )
}