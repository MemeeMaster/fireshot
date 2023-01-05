import { Typography, Stack } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Logo = () => {
  return (
    <Stack direction="row" sx={{ alignItems: "center", cursor: "pointer" }}>
      <WhatshotIcon color="primary" />
      <Typography
        variant="h5"
        component="h1"
        color="primary"
        fontFamily="Fredoka One"
      >
        FireShot
      </Typography>
    </Stack>
  );
};

export default Logo;
