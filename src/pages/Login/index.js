import React from "react";
import { Container, FormContainer } from "./styles.js";
import ButtonComponent from "../../components/Button/index.js";
import {TextField} from "@mui/material";
export default function Login() {
  return (
    <Container>
      <p className="start-text">Vamos começar?</p>
      <FormContainer>
        <form>
          <TextField
            label="Login"
            placeholder="Digite seu e-mail de acesso, exemplo (brq.com.br)"
            sx={{
              width: {
                width: 500,
              },
              marginBottom: "20px",
            }}
            className="input-login"
          />
          <TextField
            label="Senha"
            sx={{
              width: {
                width: 500,
              },
              marginBottom: "20px",
            }}
            className="input-login"
          />

          {/* <InputPasswordContainer>
            <p>
              <input type="text" id="custom01" />
              <label for="costum">Senha</label>
            </p>
          </InputPasswordContainer> */}

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
