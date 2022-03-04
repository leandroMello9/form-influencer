import styled from "styled-components";

export const Container = styled.div`
  display: flex ;
  flex-direction: column ;
  height:  40px;
  align-items: center ;
  justify-content: space-between ;
  margin-top: 25px ;
  
`;
export const ContainerUser = styled.div`
  display: flex ;
  flex-direction: row ;
  height:  40px;
  align-items: center ;
  width:100% ;
  justify-content: space-between ;
  
`;

export const NameUser = styled.p`
    width: 50px ;
    font: 14px 'Roboto', sans-serif;

`
export const CpfUser = styled.p`
    width:120px ;
    font: 14px 'Roboto', sans-serif;
`;
export const Status = styled.div`
    display: flex ;
    align-items: center ;
    width: 150px ;
    font: 14px 'Roboto', sans-serif;

`;

export const StatusColor = styled.div`
    width: 15px ;
    height: 15px;
    border-radius: 15px ;
    background-color: ${props => props.status ? "#91B94A" : "#B00020"} ;
    margin-right: 5px;

`

export const ContainerMap = styled.div`
    width:50%;
    margin-bottom: 15px ;
`