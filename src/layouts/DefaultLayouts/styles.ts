import styled from 'styled-components' 

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin-inline: auto;
  
  @media (max-width: 1660px) {
    padding-inline: 2rem;
  }
  @media (max-width: 1560px) {
    padding-inline: 4rem;
  }
  @media (max-width: 960px) {
    padding-inline: 2rem;
  }
  @media (max-width: 640px) {
    padding-inline: 1rem;
  }

`