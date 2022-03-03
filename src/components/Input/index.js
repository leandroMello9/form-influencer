import React, { useState, useRef } from "react";
import { Container, Input, ContainerInput } from "./styles.js";

export default function InputComponnet(props) {
  const inputRef = useRef()
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <ContainerInput isFocused={isFocused}>
        <input
          {...props}
          // onChange={(value) => onChangeText(value, refInput)}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <label>{props.label}</label>
      </ContainerInput>
    </Container>
  );
}
