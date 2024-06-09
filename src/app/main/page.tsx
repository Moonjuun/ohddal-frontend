"use client";
import React, { useState, useEffect } from "react";
import { Container, Button } from "@mui/material";
import FileUpload from "./FileUpload";

const Main: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <FileUpload />
    </Container>
  );
};

export default Main;
