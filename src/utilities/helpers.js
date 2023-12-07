import { addMinutes, format, parse } from "date-fns";
import {
  WEEKEND_CLOSING_HOUR,
  WEEKEND_OPENING_HOUR,
  WEEK_CLOSING_HOUR,
  WEEK_OPENING_HOUR,
} from "../config/constants";

export function fixedNavigation(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en-US").format(new Date(dateStr));
}

export function formatTime(timeStr) {
  return new Date(`1970-01-01T${timeStr}Z`).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
}

export function getAvailableTimeSlots(date, open, close) {
  const times = Array.from({ length: (close - 1 - open) * 2 }, (_, i) => {
    const hour = Math.floor(open + i / 2);
    const minute = (i % 2) * 30;

    const dateTime = new Date(date);
    dateTime.setHours(hour, minute, 0, 0);

    return format(dateTime, "hh:mm a");
  });

  return times;
}

export function getOpeningHour(date) {
  const open =
    date.getDay() === 0 || date.getDay() === 6
      ? WEEKEND_OPENING_HOUR
      : WEEK_OPENING_HOUR;
  return open;
}

export function getClosingHour(date) {
  const close =
    date.getDay() === 0 || date.getDay() === 6
      ? WEEKEND_CLOSING_HOUR
      : WEEK_CLOSING_HOUR;
  return close;
}

export function calculateStartEndTime(start, duration) {
  const [hours, rawMinutes] = duration.toString().split(".").map(Number);
  const hoursInMinutes = hours * 60;
  const minutes = rawMinutes === 5 ? 30 : 0;
  const totalMinutes = hoursInMinutes + minutes;

  const startTime = parse(start, "h:mm a", new Date());

  const endTime = addMinutes(startTime, totalMinutes);

  return [format(startTime, "kk:mm"), format(endTime, "kk:mm")];
}

export function filterConcurrentReservations(reservations, start, end) {
  const filteredReservations = reservations.filter((reservation) => {
    return (
      (reservation.from >= start && reservation.from < end) ||
      (reservation.to > start && reservation.to <= end) ||
      (reservation.from <= start && reservation.to >= end)
    );
  });

  return filteredReservations;
}
