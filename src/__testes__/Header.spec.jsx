import React from "react";
import renderer from "react-test-renderer";
import Header from "../components/Header";

test("Rederizando componente Header", () => {
  const component = renderer.create(<Header></Header>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});

