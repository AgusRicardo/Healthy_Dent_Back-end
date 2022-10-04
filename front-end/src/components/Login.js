import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../auth/UserContext';

export const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email: </label>
          <input type="email" name="email" id="" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="">Password: </label>
          <input type="password" name="password" id="" onChange={handleChange}/>
        <br />
        <br />
          <input type="submit" onClick={ () => setUser({ id: 123, email: state.email, password: state.password})}/>
      </form>
      <pre>
        {
          JSON.stringify(user)
        }
      </pre>
    </div>
  )
}
