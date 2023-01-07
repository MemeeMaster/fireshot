import Post from "../../components/organisms/Post/Post";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {
  query,
  collection,
  where,
  getDocs,
  getDoc,
  doc,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../assets/firebase";
import getErrorMessage from "../../utils/getErrorMessage";
import PostSkeleton from "../../components/organisms/PostSkeleton/PostSkeleton";

const Main = () => {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let followers: DocumentData[];

  useEffect(() => {
    const getMainPage = async () => {
      try {
        const userSnap = await getDoc(doc(db, "users", "CCEGpu3aK3OZ8ihq5xdC"));

        if (userSnap.exists() && userSnap.data().length !== 0)
          followers = userSnap.data().followers;

        followers.map(async (el) => {
          try {
            const q = query(
              collection(db, "posts"),
              where("authorId", "==", el)
            );
            const postSnap = await getDocs(q);
            const postArr: DocumentData[] = [];

            postSnap.forEach((doc) => {
              postArr.push(doc.data());
            });

            setPosts(postArr);
            setLoading(false);
          } catch (err) {
            console.error(getErrorMessage(err));
          }
        });
      } catch (err) {
        console.error(getErrorMessage(err));
      }
    };
    getMainPage();
  }, []);

  return (
    <Box sx={{ padding: "70px 0 60px" }}>
      {!loading ? (
        <>
          {posts.map((el) => {
            const {
              authorAvatar,
              authorName,
              description,
              likes,
              url,
              postId,
              date_of_upload,
            } = el;

            return (
              <Post
                authorAvatar={authorAvatar}
                authorName={authorName}
                description={description}
                likes={likes}
                url={url}
                key={postId}
                date={date_of_upload}
              />
            );
          })}
        </>
      ) : (
        <PostSkeleton />
      )}
    </Box>
  );
};

export default Main;
