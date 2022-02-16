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

  background-color: #fff;
  .img-container {
    display: flex;
    width: 175vh;
    justify-content: space-between;
    height: 10vh;
  }
  .sul-america{
      margin-right: 5vh;
  }
  img {
    width: 120px;
    height: 50px;
  }
`;

export const HeaderColor = styled.div`
  background-color: #F26661;
  height: 5vh;
`;
