import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[700],
    },
    secondary: {
      main: colors.grey[400],
    },
  },
  custom: {
    black: "#242424",
    white: "#cecece",
    gray: "#6f6f6f",
    darkGray: "#333",
  },
});

export default theme;
