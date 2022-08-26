import { ButtonHTMLAttributes } from "react";
import { ButtonConfirm } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

export function ButtonConfirmOrder({ text, ...props }: ButtonProps) {
  return(
    <ButtonConfirm>
      {text}
    </ButtonConfirm>
  )
}