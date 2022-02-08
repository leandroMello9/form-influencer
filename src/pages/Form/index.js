import React, { useState, useCallback } from "react";
import { cpfMask } from "../../util/Mask";
import { numberMask } from '../../util/MaskPhone'
import { ContainerForm, Form, Container, Header } from './styles'
import { TextField, Button } from '@mui/material';
function App() {
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("")
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const onSubmitForm = useCallback((eventForm) => {
    eventForm.preventDefault();
    console.log("Form input");
  }, []);

  return (
    <Container>
      <Header>
        <img src="https://logodownload.org/wp-content/uploads/2020/12/sulamerica-saude-logo.png"/>
      </Header>
      <br/>
       <ContainerForm>
      <h1>Cadastro influencer</h1>
    <br/>
      <Form onSubmit={onSubmitForm}>
        <TextField placeholder="Digite seu Apelido"
          value={surname}
          onChange={
            (value) => setSurName(value.target.value)
          }
          sx={{
            "width": {
              width: 200
            }
          }}
          maxLength={8}
          id="outlined-basic"
          label="Apelido"
          variant="outlined"
        ></TextField>
        <br></br>
        <TextField placeholder="Digite seu CPF, ex 88.444.55-71"
          value={cpf}
          onChange={
            (value) => setCpf(cpfMask(value.target.value))

          }
          sx={{
            "width": {
              width: 300
            }
          }}
          maxLength={8}
          id="outlined-basic"
          label="CPF"
          variant="outlined"
        ></TextField>
        <br></br>
        <TextField placeholder="Digite seu e-mail"
          type={"email"}
          value={email}
          onChange={
            (value) => setEmail(value.target.value)
          }
          sx={{
            "width": {
              width: 300
            }
          }}
          maxLength={8}
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
        ></TextField>

        <br />
        <TextField placeholder="Digite seu Telefone"

          value={number}
          onChange={
            (value) => {
              setNumber(numberMask(String(value.target.value)))
              console.log(numberMask(value.target.value))
            }
          }
          sx={{
            "width": {
              width: 200
            }
          }}
          maxLength={8}
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
        ></TextField>
        <br></br>
        <Button type="submit" sx={{
          "color": "#fff",
          "font-size": 13,
          "width": {
            width: 150
          }
        }}
          variant="contained"
        >Cadastrar</Button>

        <br />
      </Form>

    </ContainerForm>
    </Container>
   

  );
}

export default App;
