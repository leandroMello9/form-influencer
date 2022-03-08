import React from "react";
import renderer from "react-test-renderer";
import Form from "../pages/Form";
import "babel-polyfill"
test("Rederizando componente Form", () => {
  const component = renderer.create(<Form></Form>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});