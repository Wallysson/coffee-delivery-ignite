import styled from 'styled-components'

export const CoffeeContainerHero = styled.div`
 padding-block: 2rem;

 h2 {
  margin-bottom: 3.375rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  color: ${props => props.theme['base-subtitle']};
  font-weight: 800;
  line-height: 130%;
 }
`

export const CoffeeContainerList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
`