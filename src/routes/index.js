import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FormUser from "../pages/Form";
import Login from "../pages/Login";
export default function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
