import React, { useState, useCallback, useRef } from "react";
import { cpfMask } from "../../util/Mask";
import {
  ContainerForm,
  Form,
  Container,
  ContainerButton,
  DescribeInfluencerContainer,
} from "./styles";
import InputComponnet from "../../components/Input";
import ButtonComponent from "../../components/Button";
import api from "../../util/axios";
import { validate } from "gerador-validador-cpf";

function App() {
  const [cpf, setCpf] = useState("");
  const refForm = useRef();
  const onSubmitForm = useCallback(async (eventForm) => {
    const cpfValidate = eventForm.target[0].value;
    try {
      const cpfFormated = String(cpfValidate)
        .replace(/\./g, "")
        .replace("-", "");
      eventForm.preventDefault();
      const validateCpf = validate(cpfFormated);
      if (validateCpf) {
        const { data } = await api.post("/userInfluencer", {
          user_cpf: cpf,
        });
      }
      console.log("Error", validateCpf);
    } catch (err) {}
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
        <Form onSubmit={onSubmitForm} ref={refForm}>
          <InputComponnet
            placeholder="Digite seu cpf, ex 88.44.555-99"
            onChange={(value) => setCpf(cpfMask(value.target.value))}
            value={cpf}
            label="CPF *"
          ></InputComponnet>

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
