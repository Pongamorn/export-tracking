import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import { Paper, Typography } from "@mui/material";

function Report() {
  return (
    <>
      <Sidebar menu="/report">
        <Paper elevation={3}>
          <Typography variant="h4">Report</Typography>
        </Paper>
      </Sidebar>
    </>
  );
}

export default Report;
