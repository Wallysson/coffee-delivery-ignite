import styled from "styled-components"

export const InputErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;

  > small {
    color: red;
  }
`

export const InputStyle = styled.input`
  border: none;
  border-radius: 4px;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  color: ${props => props.theme['base-label']};

  font-size: 0.75rem;
  line-height: 1.1375rem;
  height: 2.625rem;
  padding: 0 0.75rem;

  &:focus {
    border-color: ${props => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
`