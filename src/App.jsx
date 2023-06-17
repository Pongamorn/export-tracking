import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Loginform from './components/LoginForm/Loginform'
import  Home from './page/Home'
import Register from './page/Register'
import Sidebar from './components/SideBar/SideBar'
import AuthLoadingProfile from './auth/AuthLoadingProfile'
import PrivateRoute from './guard/auth'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      {/* <Route element={<PrivateRoute/>}>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='menu' element={<Sidebar/>} />
      </Route> */}
      <Route path='/home' element={<Home/>} />
      <Route path='/' element={<Loginform/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='menu' element={<Sidebar/>} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
