import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTextField } from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <StyledTextField
      variant="outlined"
      size="small"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
