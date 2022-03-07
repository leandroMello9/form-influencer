import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import FormUser from "../pages/Form";
export default function MarkedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/marked" element={<FormUser />} />
        <Route  path="*" element={<Navigate to="/marked" />} />
      </Routes>
    </BrowserRouter>
  );
}
