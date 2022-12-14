import styled from 'styled-components'

export const QuantityCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 8px;
  border-radius: 6px;
  background: ${props => props.theme['base-button']};

  strong {
    font-weight: 400;
    line-height: 130%;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${props => props.theme.purple};

    width: 0.875rem;
    height: 0.875rem;

    cursor: pointer;
    transition: 0.2s all;

    &:hover {
      color: ${props => props.theme['purple-dark']};
    }
  }
`