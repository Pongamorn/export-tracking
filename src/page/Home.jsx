import { Box, Button, Grid, Typography } from "@mui/material";
import AuthLoadingProfile from "../auth/AuthLoadingProfile";
import Logout from "../components/Logout/Logout";
import Sidebar from "../components/SideBar/SideBar";
import Table from "../components/Table/Table";

function Home() {
  console.log("HOme");
  return (
    <>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={0} lg={0} sx={{ backgroundColor: "green" }}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: "red" }}>
          <Box marginTop={2} marginBottom={2}>
            <Typography variant="h3" component={'h3'}>Tark List</Typography>
          </Box>
          <Button variant="contained">Contained</Button>
          <Logout />
        </Grid>
      </Grid> */}
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

export default Home;
