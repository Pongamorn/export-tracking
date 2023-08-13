import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/SideBar/SideBar";
import {
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const AdminDetail = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const { id } = useParams();
  const flex = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    my: 3,
  };
  const item = {
    width: "50%",
  };
  const steps = [
    "PO Received",
    "PI Cretated",
    "SO Created",
    "Inv No.",
    "Loading",
    "Shipping Schedule",
    "Shipping Doc",
    "PRE - ALERT",
  ];
  const changeDate = (date) => {
    try {
      console.log("date", date);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sidebar menu="/detail">
      {/* Step at TOP */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stepper activeStep={4} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>

      {/* Show detail in border dotted */}
      <Box sx={{ my: 10, border: "4px #B1E8F4 dotted", p: 7, borderRadius: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                PO No.
              </Typography>
              <Typography variant="p" sx={item}>
                11003
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                PI No.
              </Typography>
              <Typography variant="p" sx={item}>
                238/23
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                Sales Order
              </Typography>
              <Typography variant="p" sx={item}>
                2000934253
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                Sold To Name
              </Typography>
              <Typography variant="p" sx={item}>
                TOA COATING (CAMBODIA) CO., LTD.
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                Mode of Transport
              </Typography>
              <RadioGroup row onChange={(e) => console.log(e.target.value)}>
                <FormControlLabel value="SEA" control={<Radio />} label="SEA" />
                <FormControlLabel
                  value="TRUCK"
                  control={<Radio />}
                  label="TRUCK"
                />
                <FormControlLabel value="AIR" control={<Radio />} label="AIR" />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                PO Receive Date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs} sx={item}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Select Date"
                    format="DD/MM/YYYY"
                    onChange={changeDate}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                PI Create Date
              </Typography>
              <Typography variant="p" sx={item}>
                15/05/2023
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                SO Created date
              </Typography>
              <Typography variant="p" sx={item}>
                17/05/2023
              </Typography>
            </Box>
            <Box sx={flex}>
              <Typography variant="h5" sx={item}>
                Last contract date
              </Typography>
              <Typography variant="p" sx={item}>
                17/6/2023
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Show detail at bottom */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" mb={2}>
            Update Invoice no.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">Delivery /Shipment No.</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="p">4001507639 / 8100254083</Typography>
            </Grid>
            <Grid item xs={12} padding={4}>
              <TextField
                label="Invoice No."
                size="small"
                helperText="Please enter The invoice No"
                fullWidth="true"
                type="number"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6">Delivery /Shipment No.</Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography variant="p">4001507639 / 8100254083</Typography>
            </Grid>
            <Grid item xs={12} padding={4}>
              <TextField
                label="Invoice No."
                size="small"
                helperText="Please enter The invoice No"
                fullWidth="true"
                type="number"
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Sidebar>
  );
};

export default AdminDetail;
