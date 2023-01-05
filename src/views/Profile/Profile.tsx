import { useState, useEffect } from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Divider,
  Skeleton,
} from "@mui/material";
import theme from "../../assets/theme";
import { db } from "../../assets/firebase";
import {
  getDoc,
  getDocs,
  query,
  where,
  collection,
  doc,
  DocumentData,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import getErrorMessage from "../../utils/getErrorMessage";
import ProfileDetails from "../../components/organisms/ProfileDetails/ProfileDetails";

const Profile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<DocumentData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const userSnap = await getDoc(doc(db, "users", "CCEGpu3aK3OZ8ihq5xdC"));

        const q = query(
          collection(db, "posts"),
          where("authorId", "==", "CCEGpu3aK3OZ8ihq5xdC")
        );
        const postSnap = await getDocs(q);

        postSnap.forEach((doc) => {
          setPosts([...posts, doc.data()]);
        });

        if (userSnap.exists()) {
          setDetails(userSnap.data());
          setLoading(false);
        } else navigate("/fireshot/404");
      } catch (err) {
        console.error(getErrorMessage(err));
        navigate("/fireshot/404");
      }
    };
    getProfile();
  }, []);

  return (
    <Stack sx={{ paddingBottom: "40px" }}>
      <ProfileDetails loading={loading} details={details} posts={posts} />
      <Divider sx={{ backgroundColor: theme.custom.gray }} />
      {!loading ? (
        <ImageList
          sx={{ height: 450, marginTop: "2px" }}
          cols={3}
          rowHeight={164}
        >
          {posts.map((item: DocumentData) => (
            <ImageListItem sx={{ cursor: "pointer" }} key={item.url}>
              <img
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.description}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Skeleton variant="rectangular" height={500} />
      )}
    </Stack>
  );
};

export default Profile;
