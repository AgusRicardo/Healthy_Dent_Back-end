import React, { useState } from "react";

export const Register = () => {
  const [state, setState] = useState({
    dni: "",
    name: "",
    last_name: "",
    date_birth: "",
    address_user: "",
    email_user: "",
    gender: "",
    telephone: "",
    password: "",
    prepaid_id: "",
  });

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json"},
    })
    const data = await res.json()
    console.log(data);
  };
  return (
    <div>
      <h2>Registro</h2>
      <br />
      {/* Registro tipo usuario */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre:</label>
        <input type="text" autoComplete="off" name="name" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Apellido:</label>
        <input type="text" autoComplete="off" name="last_name" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" autoComplete="off" name="email_user" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" autoComplete="off" name="password" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Dni:</label>
        <input type="text" autoComplete="off" name="dni" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Fecha de nacimiento:</label>
        <input type="date" autoComplete="off" name="date_birth" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Dirección:</label>
        <input type="text" autoComplete="off" name="address_user" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Telefono:</label>
        <input type="number" autoComplete="off" name="telephone" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Obra social:</label>
        <select name="prepaid_id" id="" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Registrarse" />
      </form>
    </div>
  );
};
