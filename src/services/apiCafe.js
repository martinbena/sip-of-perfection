import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

const menuRef = collection(db, "menu");
const reservationsRef = collection(db, "reservations");

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

export async function makeReservation(reservation) {
  try {
    const newReservation = await addDoc(reservationsRef, {
      date: reservation.date,
      preorder: reservation.preorder,
    });
    return newReservation;
  } catch (err) {
    throw new Error(err.message);
  }
}
