import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Loginform from './components/LoginForm/Loginform'
import  Home from './page/Home'
import Register from './page/Register'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginform/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
