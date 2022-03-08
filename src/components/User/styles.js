import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const NameUser = styled.p`
  width: 50px;
  font: 14px "Roboto", sans-serif;
`;
export const CpfUser = styled.p`
  width: 120px;
  font: 14px "Roboto", sans-serif;
`;
export const Status = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  font: 14px "Roboto", sans-serif;
`;

export const StatusColor = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: ${(props) => (props.status ? "#91B94A" : "#B00020")};
  margin-right: 5px;
`;

export const ContainerMap = styled.div`
  width: 70%;
  margin-bottom: 15px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  background: ${(props) =>
    props.onCheck ? "rgba(187, 134, 252, 0.38)" : "rgba(33, 33, 33, 0.08)"};
  border-radius: 7px;
  height: 22px;
`;

export const Button = styled.button`
  background: #ffffff;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  position: relative;
  bottom: 2px;
  right: 2px;
  border: 0px;
  transition: 0.9s;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  :active {
    background: ${(props) => props.onCheck && "#6200EE"};
    position: ${(props) => props.onCheck && "relative"};
    left: ${(props) => props.onCheck && 32 + "px"};
    transition: ${(props) => props.onCheck && "0.8s"};
  }
  :not(:active) {
    background: ${(props) => props.onCheck && "#6200EE"};
    position: ${(props) => props.onCheck && "relative"};
    left: ${(props) => props.onCheck && 32 + "px"};
  }
`;
export const SubContainer = styled.div`
  width: 30px;
`;
