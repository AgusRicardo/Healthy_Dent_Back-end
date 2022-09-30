import React from 'react'
import { UserProvider } from './auth/UserProvider'
import { AppRouters } from './routers/AppRouters'


const App = () => {
  return (
    <UserProvider>
      <AppRouters/>
    </UserProvider>
  )
}

export default App
