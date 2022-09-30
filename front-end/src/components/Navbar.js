import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav>
          <Link to="/">
            <button>
              Home
            </button>
          </Link>
        <button onClick={() => navigate("/register")}>Registrarse</button>
        <button onClick={() => navigate("/login")}>Iniciar sesión</button>
        <button onClick={() => navigate("/search")}>Buscar profesional</button>
      </nav>
    </div>
  )
}
