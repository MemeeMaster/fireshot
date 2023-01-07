import { AppBar, Toolbar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import theme from "../../../assets/theme";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const UpperNavigation = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/fireshot/");

  return (
    <AppBar sx={{ position: "fixed", top: 0, boxShadow: "none" }}>
      <Toolbar
        sx={{
          padding: 2,
          justifyContent: "space-evenly",
          backgroundColor: theme.custom.black,
          borderBottom: `1px solid ${theme.custom.gray}`,
        }}
      >
        <Logo onClick={handleClick} />
        <SearchBar />
        <IconButton>
          <Badge badgeContent={2} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavigation;
