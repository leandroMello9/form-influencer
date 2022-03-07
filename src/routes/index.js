import React, { useEffect } from "react";
import { Routes, Navigate, Route, useNavigate } from "react-router-dom";
import FormUser from "../pages/Form";
import Login from "../pages/Login";
export default function RoutesMain() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/form");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/form" element={<FormUser />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={token ? <Navigate to="/form" /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}
