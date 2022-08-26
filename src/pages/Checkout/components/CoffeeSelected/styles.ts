import styled from "styled-components";

export const CoffeeSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  h2 {
      margin-bottom: 1rem;
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
    }
`

export const ContainerBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['base-card']};
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  border-radius: 6px 44px 6px 44px;
`