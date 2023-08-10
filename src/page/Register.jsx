import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import loginLogo from ".././img/loginLogo.png";
import rabbit from "../assets/rabbit.png";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Register() {
  const [username, setUsername] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [isPassMatch, setIsPassMatch] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const MySwal = withReactContent(Swal);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const registerData = {
    username: username,
    password: password,
    email: email,
    role: "member",
    avatar: imageUrl === null ? null : imageUrl,
    customerID: customerId,
    companyName: company,
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(registerData),
    redirect: "follow",
  };

  function submit(e) {
    e.preventDefault();
    if (!isPassMatch) {
      console.log("Not");
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Password is not match</i>,
        icon: "error",
      });
      return;
    }
    console.log(requestOptions);

    fetch("https://api_export-tracking.to-ap.com/user/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "ok") {
          MySwal.fire({
            title: <strong>Done</strong>,
            html: <i>{result.message}</i>,
            icon: "success",
          }).then(() => {
            navigate("/");
          });
        } else {
          MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>{result.error.message}</i>,
            icon: "error",
          });
        }
      });
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    console.log(event);
    console.log(reader);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const navigate = useNavigate();
  return (
    <div className="flex bg-white h-screen justify-center items-center flex-wrap">
      <div className=" w-1/2 hidden sm:block">
        <img src={loginLogo} className=" object-cover w-full" alt="" />
      </div>
      <div className=" w-full sm:w-1/2">
        {/* Register Form */}
        <form onSubmit={submit}>
          <Grid container spacing={6} marginRight={2} paddingX={14}>
            <Grid item xs={12}>
              <Typography variant="h3" component="h3">
                REGISTER
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar
                  src={imageUrl === null ? rabbit : imageUrl}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 3,
                  }}
                ></Avatar>
                <Button
                  variant="text"
                  startIcon={<CloudUploadIcon />}
                  component="label"
                  // onClick={uploadImg}
                >
                  Up image
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={handleFileUpload}
                  />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="username"
                  label="Username"
                  variant="standard"
                  fullWidth
                  required
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="customerId"
                  label="Customer ID"
                  variant="standard"
                  fullWidth
                  required
                  type="text"
                  inputProps={{ max: 10 }}
                  onChange={(e) => {
                    setCustomerId(e.target.value);
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="standard"
                type="email"
                fullWidth
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="company"
                label="Company name"
                variant="standard"
                fullWidth
                required
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                label="Password"
                variant="standard"
                fullWidth
                type="password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="confirm-password"
                label="Confirm Password"
                variant="standard"
                fullWidth
                type="password"
                required
                onChange={(e) => {
                  setConfpassword(e.target.value);
                }}
                onBlur={() => {
                  if (password !== confpassword) {
                    MySwal.fire({
                      title: <strong>Error</strong>,
                      html: <i>Password is not match</i>,
                      icon: "error",
                    });
                    setIsPassMatch(false);
                    console.log("Password is not match");
                  } else {
                    setIsPassMatch(true);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                endIcon={<SendIcon />}
                type="submit"
              >
                Submit
              </Button>
              <Divider sx={{ my: 2 }}> OR </Divider>
              <Button variant="text" fullWidth onClick={() => navigate(-1)}>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
