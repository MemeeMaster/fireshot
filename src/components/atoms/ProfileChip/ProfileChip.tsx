import { Chip } from "@mui/material";
import theme from "../../../assets/theme";

interface Props {
  label: string;
}

const ProfileChip = ({ label }: Props) => {
  return (
    <Chip
      sx={{
        border: `1px solid ${theme.custom.white}`,
        backgroundColor: theme.custom.black,
        color: theme.custom.white,
        cursor: "pointer",
      }}
      label={label}
    />
  );
};

export default ProfileChip;
