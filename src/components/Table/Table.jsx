import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Chip, Grow } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "../../config/axios";

export default function Table() {
  const [data, setData] = React.useState({});
  const fetchData = async () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get("/task/tasklist", config);
    setData(res.data.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const columns = [
    {
      field: "Status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "SoldTo",
      headerName: "Sold To",
      width: 120,
    },
    {
      field: "SoldToName",
      headerName: "Sold To Name",
      width: 350,
    },
    {
      field: "PI",
      headerName: "PI No.",
      width: 110,
    },
    {
      field: "PONo",
      headerName: "PO No.",
      width: 110,
    },
    {
      field: "SONo",
      headerName: "Sales Order",
      width: 150,
    },
    {
      field: "InvoiceNo",
      headerName: "Invoice No.",
      width: 170,
      renderCell: (p) => {
        const fIndex = data.findIndex((e) => e.id === p.row.id);
        const inv = data[fIndex].InvoiceNo;
        // const inv = rows[p.id - 1].InvoiceNo;
        return (
          <Box
            key={p.id}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {inv.map((i, index) => (
              <Chip
                key={index}
                sx={{ marginY: 1 }}
                label={i === null ? "No Invoice" : i}
                color="info"
                variant="outlined"
              />
            ))}
          </Box>
        );
      },
    },
    {
      field: "detail",
      headerName: "Detail",
      width: 150,
      renderCell: (params) => {
        // console.log(params.row.id);
        return (
          <>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate(`/detail/${params.row.id}`)}
            >
              Click
              <KeyboardArrowRightIcon />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Grow in>
      <Box sx={{ height: 800, width: "100%" }} marginTop={4}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          onRowClick={(e) => console.log(e)}
          getRowHeight={() => "auto"}
          rowHeight={100}
        />
      </Box>
    </Grow>
  );
}
