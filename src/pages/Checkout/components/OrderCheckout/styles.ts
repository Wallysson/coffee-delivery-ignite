import styled, {css} from 'styled-components'

export const PaymentAndAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;


  h2 {
      margin-bottom: 1rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
    }

  @media (max-width: 1100px) {
    flex: 1;
  }
`

export const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px;
`

export const PaymentAddressContainerHeader = styled.header`
  display: flex;
  justify-content: start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      font-size: 1rem;
      color: ${props => props.theme['base-subtitle']};
    }

    span + span {
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};
    }
  }
`

export const AddressContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .zip {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  width: 100%;;

  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${( props ) => css`
      background: ${props => props.theme["purple-light"]};
      border-color: ${props => props.theme["purple"]};
      &:hover {
        background: ${props => props.theme["purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${props => props.theme["base-button"]};
  transition: 0.4s;
  svg {
    color: ${props => props.theme["purple"]};
  }
  &:hover {
    background: ${props => props.theme["base-hover"]};
  }
  user-select: none;
`;