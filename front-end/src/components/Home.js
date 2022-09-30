import { useContext } from 'react'
import { UserContext } from '../auth/UserContext'

export const Home = () => {

  const { user } = useContext( UserContext );
  return (
    <div>
      <h2>Bienvenido al home sir: <small>{user?.name}</small></h2>
      { JSON.stringify(user) }
    </div>
  )
}
