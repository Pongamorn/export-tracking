import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Sidebar from "../components/SideBar/SideBar";
import rabbit from "../assets/rabbit.png";
import Loading from "../components/Loading/Loading";
import { Avatar, Button, Typography, Switch } from "@mui/material";

const User = () => {
  const auth = localStorage.getItem("access_token");
  const [row, setRow] = React.useState([]);
  const [load, setLoad] = React.useState(true);

  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${auth}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  React.useEffect(() => {
    console.log("load in useEffect", load);
    fetch("https://api_export-tracking.to-ap.com/user/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setRow(result.data);
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (row) => (
        <>
          <Avatar src={row.row.avatar === null ? rabbit : row.row.avatar} />
        </>
      ),
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 250,
    },
    {
      field: "customerID",
      headerName: "Customer ID",
      width: 150,
    },
    {
      field: "username",
      headerName: "Username",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "role",
      headerName: "Role",
      width: 160,
    },
    {
      field: "confirmUser",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        const handleChange = (e, event) => {
          console.log("event", event);
          try {
            let data_mock = [...row];
            console.log("mock", data_mock);

            let indexSwitch = data_mock.findIndex((x) => x.id === event?.id);

            data_mock[indexSwitch] = {
              ...data_mock[indexSwitch],

              confirmUser: e.target.checked,
            };
            setRow(data_mock);

            //API to Updata Status
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${auth}`);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
              confirmUser: e.target.checked,
            });

            var requestOptions = {
              method: "PUT",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch(
              `https://api_export-tracking.to-ap.com/user/confirm/${event?.id}`,
              requestOptions
            )
              .then((response) => response.json())
              .then((result) => {
                console.log(result);
              })
              .catch((error) => console.log("error", error));
            //End - API to Updata Status
          } catch (error) {
            console.log(error);
          }
        };
        return (
          <>
            <Switch
              inputProps={{ "aria-label": "controlled" }}
              checked={params.row.confirmUser}
              onChange={(e) => handleChange(e, params.row)}
            />
          </>
        );
      },
    },
  ];

  if (load) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <Sidebar menu="/user">
        <Typography variant="h3" component="h3" marginBottom={4}>
          User
        </Typography>
        <Box sx={{ height: 800, width: "100%" }}>
          <DataGrid
            rows={row}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            onCellModesModelChange={(x) => console.log(x)}
            loading={row.length > 0 ? false : true}
          />
        </Box>
      </Sidebar>
    );
  }
};

export default User;
