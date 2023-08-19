import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import BackupIcon from "@mui/icons-material/Backup";
import { Image } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import pdf from "../../img/pdf.svg";
import Swal from "sweetalert2";

const FileUploader = () => {
  const [file, setFile] = useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (e) => {
      const sumFile = file.length + e.length;
      if (e.length > 5 || sumFile > 5) {
        Swal.fire({
          title: "Error!",
          text: "อัพโหลดไฟล์เกิดจำนวนที่กำหนด",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        let dataMockAndDataFromUser = [...file, ...e];
        setFile(dataMockAndDataFromUser);
      }
      console.log("e", e);
    },
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
    },
  });
  console.log("file1", file);

  const deleteFiles = (e) => {
    const item = file.filter((value) => {
      return value.name !== e;
    });
    setFile(item);
  };

  const files = file.map((itemImg, index) => {
    if (itemImg.type === "application/pdf") {
      return (
        <Grid key={index} item xs={4} sm={2}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "200px",
            }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                position: "absolute",
                top: "-10",
                right: "0",
                p: 0,
              }}
              onClick={() => deleteFiles(itemImg.name)}
            >
              <DeleteForeverIcon fontSize="large" color="warning" />
            </IconButton>
            <img
              src={pdf}
              style={{
                width: "50%",
                height: "100%",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <Typography
              variant="p"
              component="p"
              noWrap
              sx={{ mt: 2, textAlign: "center" }}
            >
              {itemImg.name}
            </Typography>
          </Box>
        </Grid>
      );
    } else {
      return (
        <Grid key={index} item xs={4} sm={2}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "200px",
            }}
          >
            <IconButton
              aria-label="delete"
              size="large"
              sx={{
                position: "absolute",
                top: "-10",
                right: "0",
                p: 0,
              }}
              onClick={() => deleteFiles(itemImg.name)}
            >
              <DeleteForeverIcon fontSize="large" color="warning" />
            </IconButton>
            <img
              src={URL.createObjectURL(itemImg)}
              alt={itemImg.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography variant="p">{itemImg.name}</Typography>
        </Grid>
      );
    }
  });

  return (
    <Box>
      <Box
        {...getRootProps({ className: "dropzone" })}
        sx={{
          backgroundColor: "rgb(250, 250, 250)",
          p: 5,
          border: "2px dashed rgb(238, 238, 238)",
          textAlign: "center",
          borderRadius: 2,
          my: 4,
        }}
      >
        <BackupIcon fontSize="large" />
        <input {...getInputProps()} />
        <Typography variant="h6" component="h6">
          Drag and drop some files here, or click to select files
        </Typography>
        <em>(Only *.jpeg *.png and *.pdf will be accepted)</em>
      </Box>
      <Box>
        {files.length === 0 ? (
          <Typography variant="h4"></Typography>
        ) : (
          <Typography variant="h5" m={5}>
            Files
          </Typography>
        )}
        <Grid container spacing={2}>
          {files}
        </Grid>
      </Box>
    </Box>
  );
};

export default FileUploader;
