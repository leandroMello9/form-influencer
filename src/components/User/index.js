import React, { useState } from "react";
import {
  Container,
  ContainerUser,
  NameUser,
  CpfUser,
  Status,
  StatusColor,
  ContainerMap,
  ButtonContainer,
  Button,
  SubContainer,
} from "./styles";
import { LineContainer } from "../../pages/Form/styles";
const User = ({ users }) => {
  const [checkUsers, setCheckUsers] = useState(false);
  const onClickInButton = (user_id) => {
    const findOne = users.findIndex((user) => user.id === user_id);
    users[findOne] = {
      ...users[findOne],
      isAccess: !users[findOne].isAccess,
    };
    const newArray = users;
    setCheckUsers((users) => [...newArray]);
  };
  return (
    <Container>
      {users.map((user) => (
        <ContainerMap>
          <ContainerUser>
            <NameUser>{user.name}</NameUser>
            <CpfUser>{user.cpf}</CpfUser>
            <Status>
              <StatusColor status={user.status} />
              {user.status ? "Completo" : "Incompleto"}
            </Status>
            <ButtonContainer onCheck={user.isAccess}>
              <Button
                onClick={() => onClickInButton(user.id)}
                onCheck={user.isAccess}
              >
                {" "}
              </Button>
              <SubContainer
                className="sub-cont"
                onCheck={user.isAccess}
              ></SubContainer>
            </ButtonContainer>
          </ContainerUser>
          <LineContainer width={1000} />
        </ContainerMap>
      ))}
    </Container>
  );
};

export default User;
