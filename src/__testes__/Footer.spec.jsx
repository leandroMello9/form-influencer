import React from "react";
import renderer from "react-test-renderer";
import Footer from "../components/Footer";

test("Rederizando componente Footer", () => {
  const component = renderer.create(<Footer></Footer>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});
test("Validando texto do Footer", () => {
  const component = renderer.create(<Footer></Footer>);
  let { children: childrenComponent } = component.toJSON();

  const childrens = childrenComponent[0].children[0];
  expect(childrens).toEqual("Copyright - SulAmérica");
});
