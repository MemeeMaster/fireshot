import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StyledBottomNavigation } from "./BottomNav.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BottomNav = () => {
  const [page, setPage] = useState<string>("");
  const navigate = useNavigate();

  return (
    <StyledBottomNavigation
      value={page}
      onChange={(_e, newValue) => {
        setPage(newValue);
        navigate(`/fireshot/${newValue}`);
      }}
    >
      <BottomNavigationAction value="" label="Home" icon={<HomeIcon />} />
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
