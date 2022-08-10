import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding-block: 2rem;
  width: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.75rem;
    }
  }
`

export const Localization = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 4px;

  background: ${props => props.theme["purple-light"]};
  border-radius: 6px;

  strong {
    font-size: 0.875rem;
    color: ${props => props.theme["purple-dark"]};
    line-height: 130%;
  }

  svg {
    color: ${props => props.theme.purple};
  }

  @media(max-width: 375px) {
    visibility: hidden;
  }
`

export const ShoppingCartCheckout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme["yellow-light"]};
  padding: 0.5rem;
  border-radius: 6px;

  svg {
    color: ${props => props.theme["yellow-dark"]}
  }
`