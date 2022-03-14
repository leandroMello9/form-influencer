import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

test("Rederizando componente App", () => {
  const component = renderer.create(<App></App>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy()
});