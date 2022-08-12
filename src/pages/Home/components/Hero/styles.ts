import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 5.875rem 0 6.75rem 1rem;

  @media (max-width: 850px) {
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