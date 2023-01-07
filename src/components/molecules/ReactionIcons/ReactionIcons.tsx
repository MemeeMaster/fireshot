import { Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import theme from "../../../assets/theme";
import { StyledIcon } from "./ReactionIcons.styles";

const ReactionIcons = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ color: theme.custom.gray }}>
      <StyledIcon>
        <FavoriteBorderIcon />
      </StyledIcon>
      <StyledIcon>
        <ChatBubbleOutlineIcon />
      </StyledIcon>
      <StyledIcon>
        <ShareIcon />
      </StyledIcon>
    </Stack>
  );
};

export default ReactionIcons;
