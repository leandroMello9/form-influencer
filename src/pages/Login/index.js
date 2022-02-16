import React from "react";
import { TextField } from "@mui/material";
import { Container, FormContainer, InputPasswordContainer } from "./styles.js";
import ButtonComponent from "../../components/Button/index.js";
export default function Login() {
  return (
    <Container>
      <p className="start-text">Vamos cameçar?</p>
      <FormContainer>
        <form>
          <TextField
            label="Login"
            sx={{
              width: {
                width: 450,
              },
              marginBottom: "20px",
            }}
          />
          <InputPasswordContainer>
            <p>
                <input type="text" id="custom01"/>
                <label for="costum">Senha</label>
            </p>
          </InputPasswordContainer>

          <ButtonComponent
            label="Enviar"
            width="150"
            height="40"
            color="#fff"
            radius="62"
            backgroundColor="#2e1b6b"
          ></ButtonComponent>
        </form>
      </FormContainer>
    </Container>
  );
}
