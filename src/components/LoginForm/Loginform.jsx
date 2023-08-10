import { useState } from "react";
import loginLogo from "../../img/loginLogo.png";
import logoTOA from "../../img/logoTOA.svg";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { Link, useNavigate } from "react-router-dom";

function Loginform() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);
  const loginData = {
    username: "admin",
    password: "123456",
  };

  function Submit(e) {
    e.preventDefault();
    console.log("env", import.meta.env.VITE_TEST);
    fetch(import.meta.env.VITE_LOGIN_URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>{data.message}</i>,
            icon: "success",
          }).then(() => {
            localStorage.setItem("access_token", data.access_token);
            navigate("/");
          });
          console.log(data);
        } else {
          MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>{data.error.message}</i>,
            icon: "error",
          });
          console.log(data);
        }
      });
  }

  return (
    <div className="flex bg-white h-screen justify-center items-center flex-wrap ani">
      <div className=" w-1/2 hidden sm:block">
        <img src={loginLogo} className=" object-cover w-full" alt="" />
      </div>
      <div className=" w-full sm:w-1/2">
        <div
          className="border mx-6 2xl:mx-52 py-5 px-3 h-[550px] rounded-[35px]"
          style={{ background: "rgba(177, 232, 244, 0.5)" }}
        >
          <div className="top-login flex justify-center items-center my-11">
            <h2 className=" font-bold text-4xl text-[#17A5D1]">LOG IN</h2>
            <img
              src={logoTOA}
              className="w-[100px] object-contain px-[15px]"
              alt=""
            />
          </div>
          <form action="" onSubmit={Submit} className=" flex flex-col">
            <input
              onChange={(e) => setUser(e.target.value)}
              value={user}
              className=" bg-white mx-10 my-[15px] h-12 rounded-full px-3"
              style={{ border: "1px solid #B1E8F4" }}
              type="text"
              placeholder="USERNAME"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" bg-white  mx-10 my-[15px] h-12 rounded-full px-3 "
              style={{ border: "1px solid #B1E8F4" }}
              type="password"
              placeholder="PASSWORD"
            />
            <div className="flex mx-14 mb-4 justify-between">
              <Link to="/register">
                <p>Register</p>
              </Link>
              <p>Forgot password?</p>
            </div>
            <button
              type="submit"
              className=" bg-btn mx-10 my-[15px] h-12 rounded-full text-white hover:bg-blue-500 cursor-pointer hover:animate-bounce "
              style={{}}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginform;
