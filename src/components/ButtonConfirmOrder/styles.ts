import styled from "styled-components";

export const ButtonConfirm = styled.button`
  padding: 0.75rem 2.8rem; 

  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 160%;

  border: none;
  border-radius: 6px;
  
  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']};

  transition: 0.4s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme['yellow-dark']};
  }
`