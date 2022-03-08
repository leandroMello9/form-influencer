import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
`;
export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 950px;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DescribeInfluencerContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 15px;
    color: #79747e;
    font-family: "Nunito", sans-serif;
    font-weight: normal;
  }
  h2 {
    color: #2e1b6b;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 478px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 678px) {
    h2 {
      font-size: 20px;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 21px;
    }
  }
`;
export const ListenUsersContainer = styled.div``;

export const LineContainer = styled.div`
  height: 1px;
  max-width: 1000px;
  width: ${(props) => (props.width ? props.width + "%" : 1000 + "px")};
  background: rgba(33, 33, 33, 0.08);
  margin-top: 8px;
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const InfoIfluencerContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;

  .info-perfil {
    position: relative;
    left: 80px;
  }
  .info-cpf {
    position: relative;
  }
  p {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 678px) {
    width: 90%;
    p {
      font-size: 12px;
    }
    .info-perfil {
      position: relative;
      left: 30px;
    }
    .info-cpf {
      position: relative;
      left: 10px;
    }
  }
`;
