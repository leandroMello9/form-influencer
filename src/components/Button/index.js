import React from "react";
import { Button } from "./styles";
export default function ButtonComponent({ label, width, ...rest }) {
  return (
    <Button width={width} {...rest}>
      {label}
    </Button>
  );
}
