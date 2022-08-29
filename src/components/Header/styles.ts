import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  padding-block: 2rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${props => props.theme.background};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;

  padding: 0 0.5rem;
  height: 2.3rem;
  min-width: 2.3rem;
  border: none;
  border-radius: 6px;

  position: relative;

  font-size: 0.875rem;

  span {
    position: absolute;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: 700;
    width: 1.25rem;
    height: 1.25rem;
    top: calc(-1.25rem/2);
    right: calc(-1.25rem/2);
    color: ${props => props.theme.white};

    display: flex;
    justify-content: center;
    align-items: center;

  }

  ${({ variant, theme }) => css`
    background: ${theme[`${variant}-light`]};
    color: ${theme[`${variant}-dark`]};

    span {
      background: ${theme[`${variant}-dark`]};
    }
  `}
`