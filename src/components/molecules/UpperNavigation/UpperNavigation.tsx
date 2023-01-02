import { AppBar, Toolbar, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import theme from "../../../assets/theme";
import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../../atoms/SearchBar/SearchBar";

const UpperNavigation = () => {
  return (
    <AppBar>
      <Toolbar
        sx={{
          padding: 2,
          justifyContent: "space-evenly",
          backgroundColor: theme.custom.black,
        }}
      >
        <Logo />
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
