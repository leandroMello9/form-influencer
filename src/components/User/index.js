import React, { useState } from "react";
import {
  Container,
  ContainerUser,
  NameUser,
  CpfUser,
  Status,
  StatusColor,
  ContainerMap
} from "./styles";
import {LineContainer} from '../../pages/Form/styles'
const User = ({ users }) => {
  return (
    <Container>
      {users.map((user) => (
        <ContainerMap>
          <ContainerUser>
            <NameUser>{user.name}</NameUser>
            <CpfUser>{user.cpf}</CpfUser>
            <Status>
              <StatusColor status={user.status} />
              {user.statusMsg}
            </Status>
            <button>Clicar</button>
          </ContainerUser>
        <LineContainer width={700}/>
        </ContainerMap>
      ))}
    </Container>
  );
};

export default User;
