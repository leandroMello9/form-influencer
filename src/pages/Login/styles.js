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
  }
`;
export const InputPasswordContainer = styled.div`
  
  width: 200px;
  background-color: red;
  border: 0.1px solid transparent;
  input {
    border: 0px transparent;
  }
  p {
    position: relative;
  }
  .custom01 input,
  .custom01 label {
    -webkit-transition: all 0.2s;
    transition: all 1s;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
  }
  .custom01 input {
	width: 300px;
	padding: .5em .5em .5em 3.5em;
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
	top: .7em;
	left: .5em;
	color: #aaa;
	line-height: 1;
}
 input:focus {
	padding-left: .5em;
}
input:focus + label {
	top: -1.0em;
}
`;
