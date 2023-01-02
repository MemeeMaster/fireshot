import React from "react";
import { Stack, AppBar, Toolbar, Typography, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const UpperNavigation = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="h1">
          FireShot
        </Typography>
        <TextField
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default UpperNavigation;
