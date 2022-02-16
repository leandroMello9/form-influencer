import React from "react";
import { Header, HeaderContainer, HeaderColor } from "./styles";

export default function HeaderComponent() {
  return (
    <HeaderContainer>
        <HeaderColor></HeaderColor>
      <Header>
          <div></div>
        {/* <div className="img-container">
        <img src="https://logodownload.org/wp-content/uploads/2020/12/sulamerica-saude-logo.png" />
        <img src="https://logodownload.org/wp-content/uploads/2020/12/sulamerica-saude-logo.png"  className="sul-america"/>
        </div> */}
      </Header>
    </HeaderContainer>
  );
}
