import React, { useState, useCallback } from "react";
import { cpfMask } from "../../util/Mask";
import { numberMask } from "../../util/MaskPhone";
import {
  ContainerForm,
  Form,
  Container,
  Header,
  ContainerButton,
  DescribeInfluencerContainer,
} from "./styles";
import { TextField, Button } from "@mui/material";
import ButtonComponent from "../../components/Button";
function App() {
  const [cpf, setCpf] = useState("");
  const [number, setNumber] = useState("");

  const [surname, setSurName] = useState("");

  const [email, setEmail] = useState("");

  const onSubmitForm = useCallback((eventForm) => {
    eventForm.preventDefault();
    console.log("Form input");
  }, []);

  return (
    <Container>
      <br />
      <ContainerForm>
        <DescribeInfluencerContainer>
          <h2>Cadastro de Influenciador</h2>
          <p>* Campos obrigatórios</p>
        </DescribeInfluencerContainer>

        <br />
        <Form onSubmit={onSubmitForm}>
         
          <TextField
            placeholder="Digite seu CPF, ex 88.444.55-71"
            value={cpf}
            onChange={(value) => setCpf(cpfMask(value.target.value))}
            sx={{
              width: {
                width: 400,
              },
              "marginBottom": "20px"
            }}
            maxLength={8}
            id="outlined-basic"
            label="CPF*"
            variant="outlined"
          ></TextField>
         

         
          <ContainerButton>
            <ButtonComponent
              label="Cadastrar"
              width="135"
              height="45"
              color="#1C1B1F"
              radius="90"
              backgroundColor="rgba(31, 31, 31, 0.12);"
            ></ButtonComponent>
          </ContainerButton>

          <br />
        </Form>
      </ContainerForm>
    </Container>
  );
}

export default App;
