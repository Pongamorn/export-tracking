import { useNavigate } from "react-router-dom"

function Logout() {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
        
    }

  return (
    <>
        <button onClick={logout} className=" bg-sky-400 text-white px-5 py-2 rounded-lg">Logout</button>
    </>
  )
}

export default Logout