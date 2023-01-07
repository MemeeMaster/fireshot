import { Stack, Skeleton } from "@mui/material";

const PostSkeleton = () => {
  return (
    <Stack spacing={2} alignItems="center">
      <Skeleton variant="rectangular" width="90%" height="80px" />
      <Skeleton variant="rectangular" width="90%" height="470px" />
      <Skeleton variant="rectangular" width="90%" height="140px" />
      <Skeleton variant="rectangular" width="90%" height="40px" />
    </Stack>
  );
};

export default PostSkeleton;
