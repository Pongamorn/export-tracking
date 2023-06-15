import AuthLoadingProfile from '../auth/AuthLoadingProfile'
import Logout from '../components/Logout/Logout'

function Home() {
  return (
    <>
      <AuthLoadingProfile/>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ad.</p>
      <Logout/>
    </>
  )
}

export default Home