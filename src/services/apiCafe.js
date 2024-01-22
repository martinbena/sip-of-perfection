import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import {
  calculateStartEndTime,
  filterConcurrentReservations,
  formatDate,
  getClosingHour,
} from "../utilities/helpers";
import { CAPACITY } from "../config/constants";

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

export async function getMenuItem(id) {
  try {
    const docRef = doc(db, "menu", id);
    const res = await getDoc(docRef);
    const data = { ...res.data(), id: res.id };
    return data;
  } catch (err) {
    throw new Error(err.message || `Error finding specialities`);
  }
}

export async function makeReservation(reservation) {
  try {
    const { date, from, to, guests, fullName, email, phone, note, preorder } =
      reservation;
    const newReservation = await addDoc(reservationsRef, {
      date,
      from,
      to,
      guests,
      fullName,
      email,
      phone,
      note,
      preorder: [...preorder],
    });
    return newReservation;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function checkAvailability(date, time, duration, numGuests) {
  try {
    const reservationDate = formatDate(date);
    const [startTime, endTime] = calculateStartEndTime(time, duration);
    const close = `${getClosingHour(date)}:00`;
    let status;

    if (endTime > close) return (status = "invalid time");

    const req = query(reservationsRef, where("date", "==", reservationDate));

    const querySnapshot = await getDocs(req);

    const reservationsToday = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const concurrentReservations = filterConcurrentReservations(
      reservationsToday,
      startTime,
      endTime,
    );

    const totalGuests = concurrentReservations
      .map((reservation) => reservation.guests)
      .reduce((sum, guests) => sum + guests, 0);

    const capacityLimit = CAPACITY;
    const isAvailable = totalGuests + numGuests <= capacityLimit;

    status = isAvailable ? "ok" : "full capacity";

    return status;
  } catch (err) {
    throw new Error("Error checking availability");
  }
}

export async function getReservation(id) {
  try {
    const docRef = doc(db, "reservations", id);
    const res = await getDoc(docRef);
    const data = { ...res.data(), id: res.id };
    if (!data.date)
      throw new Error(`Couldn't find reservation number: "${id}"`);
    return data;
  } catch (err) {
    throw new Error(err.message || `Error finding reservation`);
  }
}

export async function cancelReservation(id) {
  const docRef = doc(db, "reservations", id);
  await deleteDoc(docRef);
}

export async function updateReservation(id, reservation) {
  const docRef = doc(db, "reservations", id);
  await updateDoc(docRef, { ...reservation });
}
