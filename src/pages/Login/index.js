import React, { useCallback, useState, useRef } from "react";
import { Container, FormContainer } from "./styles.js";
import ButtonComponent from "../../components/Button/index.js";
import { TextField } from "@mui/material";
import { useAuth } from "../../hooks/auth";
import validateEmail from "../../util/validateEmail.js";

export default function Login() {
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);

  const refLogin = useRef();
  const refPassword = useRef();

  const onSubmitLogin = useCallback(async (event) => {
    event.preventDefault();
    const email = refLogin.current.value;
    const emailValidate = validateEmail(email)
    const password = refPassword.current.value;
    if(!emailValidate && password === "") {
      setError({
        msg: "Verifique suas credencias",
        err: true,
        type: "all"
      })
      return;
    }
    if(!emailValidate) {
      setError({
        msg: "E-mail inváliado",
        err: true,
        type: "email"
      })
      return;
    }
    if(password === "") {
      setError({
        msg: "Senha Inválida",
        err: true,
        type: "password"
      })
      return;
    }
   
    setError(false)

    try {
      setLoading(true)
      await signIn({
        email,
        password,
      });
      setLoading(true)
    } catch (err) {
      setLoading(false)
      alert(
        "Falha em fazer login",
        "Login invalido, verifique suas crendencias"
      );
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
            error={error.err && error.type === "email" || error.type === "all"}
            

          />
          {error.err && <div className="container-error">
            <p>{error.msg}</p>
            <p></p>
            <p></p>
            </div>}
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
            error={error.err && error.type === "password" || error.type === "all"}
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
