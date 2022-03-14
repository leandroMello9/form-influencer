import React, { useState, useCallback, useRef, useEffect } from "react";
import { cpfMask } from "../../util/Mask";
import {
  ContainerForm,
  Form,
  Container,
  ContainerButton,
  DescribeInfluencerContainer,
  ListenUsersContainer,
  LineContainer,
  LoadingContainer,
  InfoIfluencerContainer,
  InfoContainer,
} from "./styles";
import InputComponnet from "../../components/Input";
import ButtonComponent from "../../components/Button";
import { app, appGlobal } from "../../util/axios";
import { validate } from "gerador-validador-cpf";
import User from "../../components/User";
import ReactLoading from "react-loading";

function App() {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);
  const [marked_users, setMarkedUsers] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const refForm = useRef();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const handleUsersInfluencer = async () => {
      try {
        setLoading(true);
        const { data } = await app.get("/userInfluencer/all");
        setLoading(false);
        setMarkedUsers((users) => [...data]);
      } catch (err) {
        console.log(err);
      }
    };

    handleUsersInfluencer();
  }, []);
  const onSubmitForm = useCallback(async (eventForm) => {
    const cpfValidate = eventForm.target[1].value;
    const nameUser = eventForm.target[0].value;
    eventForm.preventDefault();
    try {
      if (/\d/.test(nameUser)) {
        setError({
          type: "name",
          msg: "Não pode conter numeros no nome.",
          error: true,
        });
        return;
      }
      setError(false);
      const cpfFormated = String(cpfValidate)
        .replace(/\./g, "")
        .replace("-", "");
      const validateCpf = validate(cpfFormated);
      if (validateCpf) {
        try {
          const { data } = await app.post("/userInfluencer", {
            user_cpf: cpfFormated,
            user_name: nameUser,
            user_status: "I",
          });
          setError(false);

          setMarkedUsers((users) => [
            ...users,
            {
              name: nameUser,
              cpf: cpfValidate,
              status: false,
            },
          ]);

          setCpf("");

          setName("");
          try {
            const { data } = await app.get(
              `/userInfluencer/getGlobal?user_cpf=${cpfFormated}`,
              {
                headers: {
                  authorization: token,
                },
              }
            );
          } catch (err) {
            alert("Usuário foi cadastro, mais não foi encontrado no global.");
          }
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
  const loadingOurListenUsers = loading ? (
    <LoadingContainer>
      <ReactLoading height={35} width={35} color="#f26661" type="spin" />
    </LoadingContainer>
  ) : (
    <User users={marked_users} />
  );

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
            error={error.type === "name" ? error : false}
            className="cpf-input"
            maxlength={14}
            required
            value={name}
            onChange={(value) => {
              setName(value.target.value);
            }}
          ></InputComponnet>
          <InputComponnet
            placeholder="Digite seu cpf, ex 88.44.555-99"
            onChange={(value) => {
              setCpf(cpfMask(value.target.value));
              setError(false);
            }}
            value={cpf}
            label="CPF *"
            error={error.type === "cpf" ? error : false}
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
          <LineContainer width={100}></LineContainer>
          <br />
        </Form>
        <DescribeInfluencerContainer>
          <h2>Influenciadores</h2>
        </DescribeInfluencerContainer>
      </ContainerForm>
      <InfoIfluencerContainer>
        <InfoContainer>
          <p>Nome</p>
          <p className="info-cpf">CPF</p>
          <p className="info-perfil">Perfil Influenciador</p>
          <p className="">Acesso Influenciador</p>
        </InfoContainer>
        <LineContainer width={100} />
      </InfoIfluencerContainer>
      {loadingOurListenUsers}
    </Container>
  );
}

export default App;
