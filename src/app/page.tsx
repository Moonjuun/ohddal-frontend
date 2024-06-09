"use client";
import * as React from "react";
import styles from "./page.module.css";
import { Container } from "@mui/material";
import Main from "./main/page";

export default function Home() {
  return (
    <>
      <Container>
        <Main />
      </Container>
    </>
  );
}
