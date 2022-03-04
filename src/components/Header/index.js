import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderColor,
  ButtonExit,
  ExitContainer,
  ButtonExitContainer,
} from "./styles";
import nimiaLogo from '../../assets/logo.svg'
export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderColor></HeaderColor>
      <Header>
        <div className="img-container">
          <img
            src={nimiaLogo}
            className="sul-america"
          /> 
        </div>
        <ButtonExitContainer>
          <p>X</p>
          <ButtonExit>Sair</ButtonExit>
        </ButtonExitContainer>
      </Header>
      <ExitContainer>
        <div></div>
        <div></div>
        
      </ExitContainer>
    </HeaderContainer>
  );
}
