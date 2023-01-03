import React from "react";
import { ThemeProvider, Box } from "@mui/material";
import "../../assets/fonts.css";
import theme from "../../assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import UpperNavigation from "../../components/molecules/UpperNavigation/UpperNavigation";
import BottomNav from "../../components/molecules/BottomNav/BottomNav";
import Post from "../../components/organisms/Post/Post";

const Root = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: theme.custom.darkGray }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <UpperNavigation />
        <Post />
        <Post />
        <BottomNav />
      </ThemeProvider>
    </Box>
  );
};

export default Root;
