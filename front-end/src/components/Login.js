import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../auth/UserContext';

export const Login = () => {
  const [state, setState] = useState({
    email_user: "",
    password: ""
  })

  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(state),
      headers: { "Content-Type": "application/json"},
  })
  const data = await res.json()
  console.log(data);
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email: </label>
          <input type="email" name="email_user" id="" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Password: </label>
          <input type="password" name="password" id="" onChange={handleChange}/>
        <br />
        <br />
          <input type="submit" onClick={ () => setUser({ id: 123, email: state.email_user, password: state.password})}/>
      </form>
      <pre>
        {
          JSON.stringify(user)
        }
      </pre>
    </div>
  )
}
