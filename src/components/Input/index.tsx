import { forwardRef, InputHTMLAttributes } from "react";
import { InputErrorContainer, InputStyle } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props  }, ref) => 
  {
    return (
      <InputErrorContainer className={className}>
      <InputStyle {...props} ref={ref}/>
      {error && <small>{error}</small>}
      </InputErrorContainer>
    )
})