import React from "react";
import { ThemeProvider, Box } from "@mui/material";
import "../../assets/fonts.css";
import theme from "../../assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import UpperNavigation from "../../components/molecules/UpperNavigation/UpperNavigation";
import BottomNav from "../../components/molecules/BottomNav/BottomNav";

const Root = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: theme.custom.darkGray }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UpperNavigation />
        {/* <Main /> */}
        <Profile />
        <BottomNav />
      </ThemeProvider>
    </Box>
  );
};

export default Root;
