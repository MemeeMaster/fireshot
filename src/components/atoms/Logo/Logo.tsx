import { Typography, Stack } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const Logo = ({ onClick }: { onClick: () => void }) => {
  return (
    <Stack
      onClick={onClick}
      direction="row"
      sx={{ alignItems: "center", cursor: "pointer" }}
    >
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
