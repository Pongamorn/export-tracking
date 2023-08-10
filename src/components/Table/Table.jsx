import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Chip } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Table() {
  const navigate = useNavigate();
  const columns = [
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "soldTo",
      headerName: "Sold To",
      width: 120,
    },
    {
      field: "soldToName",
      headerName: "Sold To Name",
      width: 350,
    },
    {
      field: "PINo",
      headerName: "PI No.",
      width: 110,
    },
    {
      field: "PONo",
      headerName: "PO No.",
      width: 110,
    },
    {
      field: "salesOrder",
      headerName: "Sales Order",
      width: 150,
    },
    {
      field: "invoiceNo",
      headerName: "Invoice No.",
      width: 170,
      renderCell: (p) => {
        const inv = rows[p.id - 1].invoiceNo;
        // console.log("index", index);
        // console.log(">>>>>>");
        // console.log(p.id - 1);
        console.log("p", p);
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
                label={i}
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
        console.log(params.row.id);
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

  const rows = [
    {
      id: 1,
      status: "In process",
      soldTo: 15000011,
      soldToName: "TOA COATING (CAMBODIA) CO., LTD. ",
      PINo: "238/23",
      PONo: "11003",
      salesOrder: "2000934253",
      invoiceNo: [6658412, 12344512],
      // invoiceNo: mappedInvoice([6658412, 12344512]),
    },
    {
      id: 2,
      status: "In process",
      soldTo: 15000012,
      soldToName: "TOA TNAILAND",
      PINo: "118/23",
      PONo: "11443",
      salesOrder: "30009342512",
      invoiceNo: [12931111, 112003911],
      // invoiceNo: mappedInvoice([6658412, 12344512]),
    },
  ];
  return (
    <Box sx={{ height: 600, width: "100%" }} marginTop={4}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
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
  );
}
