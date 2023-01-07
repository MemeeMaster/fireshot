import { Timestamp } from "firebase/firestore";

const convertTimestamp = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  const result = `${day}/${month}/${year}`;
  return result;
};

export default convertTimestamp;
