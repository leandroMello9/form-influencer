import React from "react";
import renderer from "react-test-renderer";
import Input from "../components/Input";

test("Rederizando componente Input", () => {
  const component = renderer.create(<Input label="Cadastrar" error={false}></Input>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});