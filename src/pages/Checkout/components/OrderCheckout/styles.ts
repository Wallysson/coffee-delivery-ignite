import styled, {css} from 'styled-components'

export const PaymentAndAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  /* flex: 1 1 55%; */

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
  /* width: 100%; */
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