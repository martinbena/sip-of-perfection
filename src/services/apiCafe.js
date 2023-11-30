import { db } from "../config/firebase";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
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

export async function makeReservation(reservation) {
  try {
    const newReservation = await addDoc(reservationsRef, {
      date: reservation.date,
      from: reservation.from,
      to: reservation.to,
      guests: reservation.guests,
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

    if (endTime > close) {
      status = "invalid time";
      return status;
    }

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
    console.log(totalGuests + numGuests);
    const isAvailable = totalGuests + numGuests <= capacityLimit;

    status = isAvailable ? "ok" : "full capacity";

    return status;
  } catch (err) {
    throw new Error("Error checking availability");
  }
}
