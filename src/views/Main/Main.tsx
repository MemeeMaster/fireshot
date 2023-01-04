import Post from "../../components/organisms/Post/Post";
import { Box } from "@mui/system";

const Main = () => {
  return (
    <Box sx={{ paddingBottom: "60px" }}>
      <Post />
      <Post />
    </Box>
  );
};

export default Main;
