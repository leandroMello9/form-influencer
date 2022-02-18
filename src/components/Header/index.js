import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderColor,
  ButtonExit,
  ExitContainer,
  ButtonExitContainer,
} from "./styles";

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderColor></HeaderColor>
      <Header>
        <div></div>
        <div className="img-container">
          {/* <img src="https://logodownload.org/wp-content/uploads/2020/12/sulamerica-saude-logo.png" />
          <img
            src="https://logodownload.org/wp-content/uploads/2020/12/sulamerica-saude-logo.png"
            className="sul-america"
          /> */}
        </div>
      </Header>
      <ExitContainer>
        <div></div>
        <div></div>
        <ButtonExitContainer>
          <p>X</p>
          <ButtonExit>Sair</ButtonExit>
        </ButtonExitContainer>
      </ExitContainer>
    </HeaderContainer>
  );
}
