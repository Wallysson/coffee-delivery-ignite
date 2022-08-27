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

  ${({ variant, theme }) => css`
    background: ${theme[`${variant}-light`]};
    color: ${theme[`${variant}-dark`]}
  `}
`