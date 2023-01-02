import React from "react";
import { ThemeProvider } from "@mui/material";
import "../../assets/fonts.css";
import theme from "../../assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import UpperNavigation from "../../components/molecules/UpperNavigation/UpperNavigation";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UpperNavigation />
      </ThemeProvider>
    </>
  );
};

export default Root;
