import styled, {css} from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  
  form {
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
    width: 100%;

    h2 {
      margin-bottom: 1rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
    }

    @media (max-width: 1100px) {
      flex-wrap: wrap;
    }
  }
`

export const PaymentAndAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1 1 55%; */

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

export const AddressContainerHeader = styled.header`
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const inputDefault = css`
  border: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme['base-input']};
  padding: 0.75rem;
  color: ${props => props.theme['base-label']};
  font-size: 0.875rem;
  line-height: 1.1375rem;
  background: ${props => props.theme['base-button']};

  &::placeholder {
    color: ${props => props.theme['base-hover']};
  }
`

export const AddressInputZip = styled.input`
  ${inputDefault};
  width: 12.5rem;
`

export const AddressInputStreet = styled.input`
  ${inputDefault};

`

export const ContainerAddressFlex = styled.div`
  display: flex;
  gap: 0.75rem;
`


export const AddressInputNumber = styled.input`
  ${inputDefault};
  width: 12.5rem;

`

export const AddressInputComplement = styled.input`
  ${inputDefault};
  width: 100%;
`

export const AddressInputDistrict = styled.input`
  ${inputDefault};

`

export const AddressInputCity = styled.input`
  ${inputDefault};
  width: 100%;
`

export const AddressInputState = styled.input`
  ${inputDefault};
  width: 3.75rem;
`