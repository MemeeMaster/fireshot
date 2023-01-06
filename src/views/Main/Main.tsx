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

const Main = () => {
  const [followers, setFollowers] = useState<DocumentData[]>([]);
  const [posts, setPosts] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getMainPage = async () => {
      try {
        const userSnap = await getDoc(doc(db, "users", "CCEGpu3aK3OZ8ihq5xdC"));

        if (userSnap.exists() && userSnap.data().length !== 0) {
          setFollowers(userSnap.data().followers);
        }
      } catch (err) {
        console.error(getErrorMessage(err));
      }
    };

    getMainPage();
  }, []);

  useEffect(() => {
    followers.map(async (el) => {
      try {
        const q = query(collection(db, "posts"), where("authorId", "==", el));
        const postSnap = await getDocs(q);
        const postArr: DocumentData[] = [];

        postSnap.forEach((doc) => {
          postArr.push(doc.data());
        });

        setPosts(postArr);
      } catch (err) {
        console.error(getErrorMessage(err));
      }
    });
  }, [followers]);

  let counter = 1;

  return (
    <Box sx={{ paddingBottom: "60px" }}>
      {posts.map((el) => (
        <Post likes={el.likes} key={counter++} />
      ))}
    </Box>
  );
};

export default Main;
