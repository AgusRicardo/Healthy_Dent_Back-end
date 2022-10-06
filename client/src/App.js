import { BrowserRouter, Navigate, Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Search } from './pages/search'
import { useSelector } from 'react-redux'

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.authh)

  return <>{isAuth ? <Outlet/> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.authh)
  
  return <>{!isAuth ? <Outlet/> : <Navigate to='/search' />}</>
}

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Home/>} />


      <Route element={<RestrictedRoutes/>}>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Route>


        <Route element={<PrivateRoutes/>}>
          <Route path='/search' element={<Search/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  ) 
}
export default App