import { Stack } from "@mui/system";
import {
  Avatar,
  TextField,
  Typography,
  InputAdornment,
  Button,
  Box,
  Skeleton,
} from "@mui/material";
import theme from "../../../assets/theme";

import Divider from "@mui/material/Divider";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Wrapper } from "./Post.styles";
import { DocumentData } from "firebase/firestore";
import convertTimestamp from "../../../utils/convertTimestamp";
import ReactionIcons from "../../molecules/ReactionIcons/ReactionIcons";

const Post = ({
  authorAvatar,
  authorName,
  description,
  likes,
  url,
  date,
}: DocumentData) => {
  return (
    <Wrapper>
      <Stack
        p={1}
        direction="row"
        sx={{ alignItems: "center", cursor: "pointer" }}
      >
        <Avatar
          alt={`${authorName} profile picture`}
          src={authorAvatar}
          sx={{ width: 36, height: 36 }}
        />
        <Typography
          sx={{ marginLeft: 1, fontWeight: "bold", color: theme.custom.gray }}
        >
          {authorName}
        </Typography>
      </Stack>
      <Stack>
        <img src={url} alt={description} loading="lazy" />
      </Stack>
      <Stack sx={{ padding: "0 8px 8px", overflow: "hidden" }}>
        <ReactionIcons />
        <Typography fontWeight="bold">Number of likes: {likes}</Typography>
        {description !== "" ? (
          <Typography>
            <Box component="span" fontWeight="bold">
              {authorName}
            </Box>
            &nbsp;{description}
          </Typography>
        ) : null}
        <Typography>Show 1 comment</Typography>
        <Typography variant="body2">{convertTimestamp(date)}</Typography>
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
    </Wrapper>
  );
};

export default Post;
