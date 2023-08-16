import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import { Grow, Typography, Box } from "@mui/material";

function Report() {
  return (
    <Sidebar menu="/report">
      <Grow in timeout={900}>
        <Box>
          <Typography variant="h4">Report</Typography>
        </Box>
      </Grow>
    </Sidebar>
  );
}

export default Report;
