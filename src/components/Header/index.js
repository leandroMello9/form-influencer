import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderColor,
  ButtonExit,
  ExitContainer,
  ButtonExitContainer,
} from "./styles";
import nimiaLogo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
export default function HeaderComponent() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut();
    navigate("/login");
  };
  return (
    <HeaderContainer>
      <HeaderColor></HeaderColor>
      <Header>
        <div className="img-container">
          <img src={nimiaLogo} className="sul-america" />
        </div>
        <ButtonExitContainer>
          <p>X</p>
          <ButtonExit onClick={handleSignOut}>Sair</ButtonExit>
        </ButtonExitContainer>
      </Header>
      <ExitContainer>
        <div></div>
        <div></div>
      </ExitContainer>
    </HeaderContainer>
  );
}
