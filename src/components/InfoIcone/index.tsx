import { ReactNode } from "react";
import { IconInfoContainer, InfoIconeContainer } from "./styles";

interface InfoIconeProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

export function InfoIcone({icon, text, iconBg}: InfoIconeProps ) {
  return (
    <InfoIconeContainer>
      <IconInfoContainer iconBg={iconBg}>{icon}</IconInfoContainer>
      {typeof text === "string" ? <span>{text}</span> : text}
    </InfoIconeContainer>
  )
}