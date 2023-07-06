import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Loginform from "./components/LoginForm/Loginform";
import Home from "./page/Home";
import Register from "./page/Register";
import PrivateRoute from "./guard/PrivateRoute";
import Report from "./page/Report";
import User from "./page/User";
import Navigator from "./components/MUISidebar/MUISideBar";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#8ED1FF",
        contrastText: "#fff",
      },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/report" element={<Report />} />
            <Route path="/user" element={<User />} />
            <Route path="/" element={<Home />} />
            <Route path="/mui" element={<Navigator />} />
          </Route>
          <Route path="/login" element={<Loginform />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
