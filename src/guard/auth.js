import { Outlet , Navigate } from "react-router-dom";

function PrivateRoute () {
    const authToken = false;
    // const authToken = JSON.parse(localStorage.getItem("token"));
    // if(authToken){
    //     <Outlet/>
    // } else {
    //     <Navigate to ='/'/>
    // }
    // return (
    //     authToken ? <Outlet/> : <Navigate to ='/'/>
    // )
}

export default PrivateRoute;