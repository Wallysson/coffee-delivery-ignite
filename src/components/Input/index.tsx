import { InputHTMLAttributes } from "react";
import { InputStyle } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return (
    <InputStyle {...props} />
  )
}