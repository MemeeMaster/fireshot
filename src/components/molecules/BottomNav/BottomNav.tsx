import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledBottomNavigation } from "./BottomNav.styles";

const BottomNav = () => {
  return (
    <StyledBottomNavigation>
      <BottomNavigationAction value="home" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        value="add"
        label="Add"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        value="profile"
        label="Profile"
        icon={<AccountCircleIcon />}
      />
    </StyledBottomNavigation>
  );
};

export default BottomNav;
