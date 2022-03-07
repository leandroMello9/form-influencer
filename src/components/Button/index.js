import React from "react";
import { Button } from "./styles";
export default function ButtonComponent({ label, width,loading, ...rest }) {
  return (
    <Button width={width} {...rest}>
      {loading ? "Carregando ..." : label}
    </Button>
  );
}
