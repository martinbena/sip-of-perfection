import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const menuRef = collection(db, "menu");

export async function getMenu() {
  try {
    const res = await getDocs(menuRef);
    const data = res.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
