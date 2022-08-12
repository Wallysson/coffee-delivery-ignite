import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 5.875rem 0 6.75rem 1rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1.875rem 0 6.75rem 1rem;
  }
`

export const HeroContent = styled.div`
  @media (max-width: 850px) {
    width: 100%;
    img {
      display: none;
    }
    h1 {
      font-size: 2.5rem;
    }
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => props.theme['base-title']};

  }

  p {
    margin: 1rem 0 4.125rem;
    font-size: 1.25rem;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
`

export const ItensDescriptionContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  align-items: center;



  li {
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    line-height: 130%;
    
    &:nth-child(1) span{
      background: ${props => props.theme['yellow-dark']};
    }

    &:nth-child(2) span{
      background: ${props => props.theme['base-text']};
    }

    &:nth-child(3) span{
      background: ${props => props.theme['yellow']};
    }

    &:nth-child(4) span{
      background-color: ${props => props.theme['purple']};;
    }

    @media (max-width: 500px) {
    font-size: 0.75rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 50%;
  }



}
`