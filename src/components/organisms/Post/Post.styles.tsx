import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../../assets/theme";

export const Wrapper = styled(Stack)({
  width: "90%",
  maxWidth: "470px",
  margin: "10px auto 10px",
  backgroundColor: theme.custom.black,
  border: `1px solid ${theme.custom.gray}`,
});

