import React, { useState, useRef } from "react";
import { Container, ContainerInput, Error } from "./styles.js";

export default function InputComponnet(props) {
  const inputRef = useRef()
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container error={props.error}>
      <ContainerInput isFocused={isFocused} error={props.error}>
        <input
          {...props}
          // onChange={(value) => onChangeText(value, refInput)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <label>{props.label}</label>
      </ContainerInput>
      <Error>
        {props.error.msg && props.error.msg}
      </Error>
    </Container>
  );
}
