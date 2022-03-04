import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const Header = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center ;

  background-color: #fff;
  .img-container {
    display: flex;
    width: 175vh;
    position:relative ;
    left: 90px;
    height: 10vh;
    justify-content: center;
  }
  .sul-america {
    width: 200px;
  }
  img {
    width: 120px;
    height: 50px;
  }
  @media (max-width: 1024px) {
    width: 75%;
    margin-left: 0px;
   
  }
  @media (max-width: 678px) {
    width: 88%;
    margin-left: 15px;
    img {
      width: 150px;
      position:  relative;
      right: 72px;
    }
  }

`;

export const HeaderColor = styled.div`
  background-color: #f26661;
  height: 5vh;
 
 
  @media(max-width: 478px) {
    width: 483px;
  }
 
  @media(max-width: 678px) {
    width: 483px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    
   
  }
`;

export const ButtonExit = styled.button`
  border: 0px;
  font-family: "Roboto";
  font-weight: bold;
  font-style: normal;
  line-height: 20px;
  font-size: 16px;
  color: #6750a4;
  
 
`;
export const ExitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5vh;
 
  p {
    color: #6750a4;
  }
  @media (max-width: 478px) {
  }
  @media (max-width: 678px) {
    margin-right: 7vh;
  }
  @media (max-width: 1024px) {
    margin-right: 7vh;
  }
`;
export const ButtonExitContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 170px;
  align-items: center;
 position: relative ;
 right: 35px;
 bottom: 15px;
  button {
    margin-left: 2vh;
  }
  p {
    border: 0px;
    font-family: "Roboto";
    font-weight: bold;
    font-style: normal;
    line-height: 20px;
    font-size: 14px;
    color: #6750a4;
  }
  @media (max-width: 478px) {
    width: 60px;
  }
  @media (max-width: 678px) {
    width: 60px;
  }
  @media (max-width: 1024px) {
    width: 60px;
  }
    
`;
