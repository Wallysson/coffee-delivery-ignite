import styled from "styled-components";

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${props => props.theme['base-button']};
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  >  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['base-text']};;
    align-self: flex-start;
  }
`

export const TitleCoffeeCardCheckout = styled.strong`
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
`

export const ButtonsActionsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${props => props.theme['base-button']};

  padding: 0 0.5rem;
  height: 100%;
  
  font-size: 0.75rem;

  border-radius: 6px;
  border: none;

  transition: 0.4s;

  svg {
    color: ${props => props.theme['purple-dark']};
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  cursor: pointer;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column; 
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .label {
      font-size: 14px;
      line-height: 130%;
      color: #574F4D;
    }

    strong {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;

      color: ${props => props.theme['base-subtitle']};
    }
  }
`
