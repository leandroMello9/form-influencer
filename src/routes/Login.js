import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
export default function LoginRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route  path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}
