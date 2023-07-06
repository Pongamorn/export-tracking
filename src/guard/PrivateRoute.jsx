import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function PrivateRoute() {
  const MySwal = withReactContent(Swal);
  const token = localStorage.getItem("access_token");

  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
