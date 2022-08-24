import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
  padding: 0 1rem;
  height: 3rem;

  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 6px;

  color: ${props => props.theme['base-text']};
  background: ${props => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;
  text-transform: uppercase;

  transition: 0.4s;

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  svg {
    color: ${props => props.theme['purple']};
  }

  user-select: none;
  cursor: pointer;

  span {
    font-size: 0.75rem;
  }
`