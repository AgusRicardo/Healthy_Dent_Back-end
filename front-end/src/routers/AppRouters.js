import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { Register } from "../components/Register";
import { Search } from "../components/Search";

export const AppRouters = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas */}
        <Route path="/search" element={<Search />} />



        <Route path="/*" element={<Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
};
