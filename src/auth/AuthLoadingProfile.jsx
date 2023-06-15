import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AuthLoadingProfile() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const MySwal = withReactContent(Swal)

    useEffect(() => {
      console.log('user', user);
    }, [user])
    

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/auth/user", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.status === 'ok'){
                setUser(result.user)

                console.log('resutl', result)
                // console.log('user' , user)
            } else if (result.status === 'forbidden') {
                MySwal.fire({
                    title: <strong>Error</strong>,
                    html: <i>{result.message}</i>,
                    icon: 'error'
                  }).then(() => {
                    navigate('/')
                  })
            }
        })
        .catch(error => console.log('error', error));
      }, [])

  return (
    <>
        {user.fname}
        {user.lname}
    </>
  )
}

export default AuthLoadingProfile