import React from "react";
import { Stack, Avatar, Skeleton, Typography, Button } from "@mui/material";
import { DocumentData } from "firebase/firestore";
import ProfileChip from "../../atoms/ProfileChip/ProfileChip";
import theme from "../../../assets/theme";

interface Props {
  loading: boolean;
  details: DocumentData | undefined;
  posts: DocumentData[];
}

const ProfileDetails = ({ loading, details, posts }: Props) => {
  return (
    <>
      <Stack p={2} spacing={2} direction="row">
        {!loading ? (
          <Avatar
            sx={{ height: "90px", width: "90px" }}
            src={details!.avatar}
            alt={`${details!.first_name} ${details!.last_name} profile picture`}
          />
        ) : (
          <Skeleton variant="circular" width={100} height={100} />
        )}
        <Stack justifyContent="space-evenly">
          <Typography variant="h4" component="p" sx={{ color: theme.custom.white }}>
            {!loading ? (
              details!.nickname) : (<Skeleton variant="text" height={30} width={140} />)}
          </Typography>
          {!loading ? (
            <Button fullWidth variant="outlined">
              Edit profile
            </Button>
          ) : (
            <Skeleton variant="rounded" height={30} width={140} />
          )}
        </Stack>
      </Stack>
      <Stack padding="0 16px 8px">
        <Typography sx={{ color: theme.custom.white, fontWeight: "bold" }}>
          {!loading ? (
            `${details!.first_name} ${details!.last_name}`
          ) : (
            <Skeleton variant="text" width={80} />
          )}
        </Typography>
        <Typography sx={{ color: theme.custom.white }}>
          {!loading ? (
            details!.description
          ) : (
            <Skeleton variant="text" height={80} />
          )}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-evenly" padding="16px">
        {!loading ? (
          <>
            <ProfileChip label={`${posts.length} Posts`} />
            <ProfileChip label={`${details!.followers.length} Followers`} />
            <ProfileChip label={`${details!.following.length} Following`} />
          </>
        ) : (
          <>
            <Skeleton variant="rounded" width={60} />
            <Skeleton variant="rounded" width={60} />
            <Skeleton variant="rounded" width={60} />
          </>
        )}
      </Stack>
    </>
  );
};

export default ProfileDetails;
