import React from "react";
import renderer from "react-test-renderer";
import Button from "../components/Button";

test("Rederizando componente Button", () => {
  const component = renderer.create(
    <Button label="Cadastrar" width={200}></Button>
  );
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});
test("Validando o label no botão", () => {
  const component = renderer.create(
    <Button label="Cadastrar" width={200}></Button>
  );
  let tree = component.toJSON();
  expect(new Set(tree.children)).toContain("Cadastrar");
});
test("Validando se o label do botão esta correto", () => {
  const component = renderer.create(
    <Button label="Cadastrar" width={200}></Button>
  );
  let tree = component.toJSON();
  expect(new Set(tree.children)).not.toEqual("Enviar");
});
