import { Chip } from "@mui/material";
import theme from "../../../assets/theme";

const ProfileChip = ({ label }: { label: string }) => {
  return (
    <Chip
      sx={{
        border: `1px solid ${theme.custom.white}`,
        backgroundColor: theme.custom.black,
        color: theme.custom.white,
      }}
      label={label}
    />
  );
};

export default ProfileChip;
