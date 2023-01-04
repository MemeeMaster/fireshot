import theme from "../../../assets/theme";
import { BottomNavigation } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBottomNavigation = styled(BottomNavigation)({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: theme.custom.black,
  borderTop: `1px solid ${theme.custom.gray}`,
});
