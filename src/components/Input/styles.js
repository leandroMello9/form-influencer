import styled from "styled-components";

export const Container = styled.div`

`;

export const ContainerInput = styled.div`
  position: relative;
  width: 420px;
  height: 55px;
  border: ${props => props.isFocused ? "0.1px solid #3951b2" : "0.1px solid #79747e"};
  border-radius: 2px;
  margin-bottom: 35px;
 
  input {
    border: 0px transparent;

    :focus + label {
      top: -70px;
      transition: 0.4s;
      background-color: #fff;
      color: #3951b2;
    }
    :not(:placeholder-shown) + label {
      top: -70px;
      background-color: #fff;
      border-color: #3951b2;
    }
    ::placeholder {
      color: transparent;
    }

    width: 400px;
    height: 55px;
    margin-left: 15px;
    background-color: transparent;
  }
  label {
    position: relative;
    top: -40px;
    left: 15px;
    bottom: 0px;
    right: 0px;
    transition: 0.4s;
  }
`;
