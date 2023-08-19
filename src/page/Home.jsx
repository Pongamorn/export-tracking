import { Box, Button, Grid, Typography } from "@mui/material";
import AuthLoadingProfile from "../auth/AuthLoadingProfile";
import Logout from "../components/Logout/Logout";
import Sidebar from "../components/SideBar/SideBar";
import Table from "../components/Table/Table";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

function Home() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  if (load) {
    return <Loading />;
  } else {
    return (
      <>
        <Sidebar menu="/">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" component={"h2"}>
                Task List
              </Typography>
              <Box>
                <Table />
              </Box>
            </Grid>
          </Grid>
        </Sidebar>
      </>
    );
  }
}

export default Home;
