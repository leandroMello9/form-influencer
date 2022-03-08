import React from "react";
import renderer from "react-test-renderer";
import User from "../components/User";

test("Rederizando componente User", () => {
  const component = renderer.create(<User users={[
    {
        name: "Leo",
        cpf: "010201212",
        status: false,
        isAccess: false
    }
  ]}></User>);
  let tree = component.toJSON();
  expect(tree).toBeTruthy();
});