import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";

export const StyledTextField = styled(TextField)({
  margin: "0 16px",
  input: { color: theme.custom.white },
});