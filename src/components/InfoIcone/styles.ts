import styled from "styled-components";

export const InfoIconeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconsContainerProps {
  iconBg: string;
}

export const IconInfoContainer = styled.div<IconsContainerProps>`
  border-radius: 50%;
  padding: 0.5rem;
  background: ${({ iconBg }) => iconBg};
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
`;