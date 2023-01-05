import { ThemeProvider, Box } from "@mui/material";
import "../../assets/fonts.css";
import theme from "../../assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import UpperNavigation from "../../components/molecules/UpperNavigation/UpperNavigation";
import BottomNav from "../../components/molecules/BottomNav/BottomNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Root = () => {
  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: theme.custom.darkGray,
          overflow: 'hidden',
        }}
      >
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <UpperNavigation />
          <Routes>
            <Route path="/fireshot/" element={<Main />} />
            <Route path="/fireshot/profile" element={<Profile />} />
          </Routes>
          <BottomNav />
        </ThemeProvider>
      </Box>
    </Router>
  );
};

export default Root;
