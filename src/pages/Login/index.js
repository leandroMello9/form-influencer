import React, { useCallback, useState, useRef } from "react";
import { Container, FormContainer } from "./styles.js";
import ButtonComponent from "../../components/Button/index.js";
import { TextField } from "@mui/material";
import { useAuth } from "../../hooks/auth";

export default function Login() {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false)

  const refLogin = useRef();
  const refPassword = useRef();

  const onSubmitLogin = useCallback(async (event) => {
    event.preventDefault();
    const email = refLogin.current.value;
    const password = refPassword.current.value;

    try {
      setLoading(true)
      await signIn({
        email,
        password,
      });
      setLoading(true)
    } catch (err) {
      setLoading(false)
      alert(err);
    }
  }, []);
  return (
    <Container>
      <p className="start-text">Vamos começar?</p>
      <FormContainer onSubmit={onSubmitLogin}>
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
            inputRef={refLogin}
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
            inputRef={refPassword}
            type="password"
          />

          {/* <InputPasswordContainer>
            <p>
              <input type="text" id="custom01" />
              <label for="costum">Senha</label>
            </p>
          </InputPasswordContainer> */}

          <ButtonComponent
            label={"Enviar"}
            loading={loading}
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
