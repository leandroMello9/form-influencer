import styled from "styled-components";

export const Container = styled.div`

`;

export const Error = styled.p `
  position: relative ;
  color: red;
  bottom: 22px;
  left: 6px;
`

export const ContainerInput = styled.div`
  position: relative;
  width: 420px;
  height: 55px;
  border: ${props => props.isFocused ? "0.1px solid #3951b2" : props.error ? "0.1px solid red" : "0.1px solid #79747e"};
  border-radius: 2px;
  margin-bottom: 35px;
  @media(max-width: 678px) {
    width:  250px;
  }
 
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
    @media(max-width: 678px) {
    width:  250px;
  }
  }
  label {
    position: relative;
    top: -40px;
    color: ${props => props.error ? "red" : "black"};
    left: 15px;
    bottom: 0px;
    right: 0px;
    transition: 0.4s;
  }
`;
