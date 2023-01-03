import React from "react";
import { Stack } from "@mui/system";
import {
  Avatar,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import theme from "../../../assets/theme";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import Divider from "@mui/material/Divider";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const Post = () => {
  return (
    <Stack
      sx={{
        width: "90%",
        maxWidth: "470px",
        margin: "10px auto 10px",
        bgcolor: theme.custom.black,
        border: `1px solid ${theme.custom.gray}`,
      }}
    >
      <Stack p={1} direction="row" sx={{ alignItems: "center" }}>
        <Avatar alt="" src="" sx={{ width: 36, height: 36 }} />
        <Typography
          sx={{ marginLeft: 1, fontWeight: "bold", color: theme.custom.gray }}
        >
          nickname
        </Typography>
      </Stack>
      <Stack>
        <img src="https://source.unsplash.com/random/470x470" />
      </Stack>
      <Stack sx={{ padding: "0 8px 8px", overflow: "hidden" }}>
        <Stack direction="row" spacing={1} sx={{ color: theme.custom.gray }}>
          <IconButton color="inherit" sx={{ padding: "8px 0" }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ padding: "8px 0" }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ padding: "8px 0" }}>
            <ShareIcon />
          </IconButton>
        </Stack>
        <Typography fontWeight="bold">Number of likes: 92</Typography>
        <Typography>Show 1 comment</Typography>
        <Typography variant="body2">1 day ago</Typography>
      </Stack>
      <Divider sx={{ backgroundColor: theme.custom.gray }} />
      <TextField
        sx={{ input: { color: theme.custom.white, padding: "8px 0" } }}
        variant="standard"
        placeholder="Add comment"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InsertEmoticonIcon
                sx={{ color: theme.custom.gray, margin: "0 0 0 8px" }}
              />
            </InputAdornment>
          ),
          endAdornment: <Button sx={{ margin: "0 8px 0" }}>Publish</Button>,
        }}
      />
    </Stack>
  );
};

export default Post;
