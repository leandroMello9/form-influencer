import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .start-text {
    margin-bottom: 35px;
    color: #2e1b6b;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  height: 50vh;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media(max-width: 1024px) {
    .input-login {
      width: 320px;
    }
   }
  
   @media(max-width: 478px) {
    .input-login {
    }
   }
   @media(max-width: 678px) {
    .input-login {
      width: 280px;
    }
   }
  
  }
  .container-error {
    max-width: 1000px;
    width: 75% ;
    display: flex ;
    flex-direction: row ;
    justify-content: space-between ;
    position: relative ;
    bottom: 15px;
    p {
      font-size: 12px ;
      color: red
    }
  }
`;
export const ContainerInputPassword = styled.div`
  background-color: green;
  display: flex;
  input {
    background-color: red;
    border-radius: 100px;
    width: 62vh;
  }
 
`;
export const InputPasswordContainer = styled.div`
  width: 500px;
  height: 100px;
  border: 0.1px solid transparent;
  background-color: red;
  margin-bottom: 10px;
  input {
    border: 0px transparent;
    width: 300px;
    height: 7vh;
  }
  p {
    position: relative;
  }
  .custom01 input,
  .custom01 label {
    -webkit-transition: all 0.1s;
    transition: all 5s;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  .custom01 input {
    width: 300px;
    padding: 0.5em 0.5em 0.5em 3.5em;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #333;
  }
  label {
    position: absolute;
    top: 0.7em;
    left: 0.5em;
    color: #aaa;
    line-height: 1;
  }
  input:focus {
    padding-left: 0.5em;
  }
  input:focus + label {
    top: -0.7em;
    background-color: #fff;
  }
  /* input:focus {
    border: ;
  } */
`;
