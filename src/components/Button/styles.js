import styled from "styled-components";

export const Button = styled.button`
  height: ${(props) => (props.height ? props.height + "px" : "50px")};
  width: ${(props) => (props.width ? props.width + "px" : "100px")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  border: 0px;
  border-radius: ${(props) => (props.radius ? props.radius + "px" : "50px")};
  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  transition: background-color 0.30s;

 :hover {
   background-color: #2E1B6B;
   color: #fff
 }
  
`;
