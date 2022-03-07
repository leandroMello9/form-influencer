import React, { useState, useCallback, useRef } from "react";
import { cpfMask } from "../../util/Mask";
import {
  ContainerForm,
  Form,
  Container,
  ContainerButton,
  DescribeInfluencerContainer,
  ListenUsersContainer,
  LineContainer,
} from "./styles";
import InputComponnet from "../../components/Input";
import ButtonComponent from "../../components/Button";
import { app } from "../../util/axios";
import { validate } from "gerador-validador-cpf";
import User from "../../components/User";

function App() {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);
  const [marked_users, setMarkedUsers] = useState([
    {
      name: "Leandro",
      status: true,
      cpf: cpfMask("07533149599"),
      statusMsg: "Cadastro completo",
    },
    {
      name: "Annibal",
      status: false,
      cpf: "075.335.777-99",
      statusMsg: "Cadastro incompleto",
    },
  ]);
  const refForm = useRef();
  const onSubmitForm = useCallback(async (eventForm) => {
    const cpfValidate = eventForm.target[1].value;
    const nameUser = eventForm.target[0].value;
    console.log(nameUser)
    try {
      const cpfFormated = String(cpfValidate)
        .replace(/\./g, "")
        .replace("-", "");
      eventForm.preventDefault();
      const validateCpf = validate(cpfFormated);
      if (validateCpf) {
        try {
          const { data } = await app.post("/userInfluencer", {
            user_cpf: cpfFormated,
            user_name: nameUser,
          });
          setError(false);
        } catch (err) {
          setError({
            msg: "Usuário já cadastrado, tente outro cpf",
            error: true,
          });
        }
      } else {
        setError({
          type: "cpf",
          msg: "Cpf inválido",
          error: true,
        });
      }
    } catch (err) {
      setError({
        msg: err,
        error: true,
      });
    }
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
        <Form onSubmit={onSubmitForm} ref={refForm} className="cpf-form">
          <InputComponnet
            placeholder="Digite seu nome"
            label="Nome *"
            error={error.type === "cpf" ? false : error}
            className="cpf-input"
            maxlength={14}
          ></InputComponnet>
          <InputComponnet
            placeholder="Digite seu cpf, ex 88.44.555-99"
            onChange={(value) => {
              setCpf(cpfMask(value.target.value));
              setError(false);
            }}
            value={cpf}
            label="CPF *"
            error={cpf === "" ? false : error}
            className="cpf-input"
          ></InputComponnet>

          <ContainerButton>
            <ButtonComponent
              label="Cadastrar"
              width="135"
              height="45"
              color="#1C1B1F"
              radius="90"
              backgroundColor="rgba(31, 31, 31, 0.12);"
              className="cpf-button"
            ></ButtonComponent>
          </ContainerButton>
          <LineContainer></LineContainer>
          <br />
        </Form>
        <DescribeInfluencerContainer>
          <h2>Influenciadores cadastrados</h2>
        </DescribeInfluencerContainer>
      </ContainerForm>
      <User users={marked_users} />
    </Container>
  );
}

export default App;
