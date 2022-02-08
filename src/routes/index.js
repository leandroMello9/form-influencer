import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FormUser from "../pages/Form";
export default function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormUser />} />
      </Routes>
    </BrowserRouter>
  );
}
