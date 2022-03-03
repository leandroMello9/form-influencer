import "@testing-library/jest-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import InputComponnet from "../components/Input";
import FormInfluencer from "../pages/Form";
import api from "../util/axios";

test("Criando um usuário na API", async () => {
  const { container } = render(<FormInfluencer />);
  const elementInput = container.querySelector(".cpf-input");
  console.log("CONTAINER", elementInput);

  // const elementForm = container.querySelector(".cpf-form");
  // elementInput.setAttribute("value", "07533149599");
  // const getValue = elementInput.getAttribute("value");

  // const { data, status } = await api.post("/userInfluencer", {
  //   user_cpf: getValue,
  // });
  //expect(status).toEqual(201);
});
