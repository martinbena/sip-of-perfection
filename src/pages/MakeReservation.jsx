import { useEffect, useState } from "react";
import HeadingPrimary from "../ui/HeadingPrimary";
import {
  calculateStartEndTime,
  formatDate,
  getAvailableTimeSlots,
  getClosingHour,
  getOpeningHour,
} from "../utilities/helpers";
import { MAX_DATE, MIN_DATE } from "../config/constants";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addHours, format, setHours, setMinutes } from "date-fns";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { checkAvailability, makeReservation } from "../services/apiCafe";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDate,
  updateGuests,
} from "../features/reservation/reservationSlice";

function MakeReservation() {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const [date, setDate] = useState(MIN_DATE);
  const [selectedTime, setSelectedTime] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [duration, setDuration] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [message, setMessage] = useState("");

  const open = getOpeningHour(date);
  const close = getClosingHour(date);

  const allReservationTimes = getAvailableTimeSlots(date, open, close);

  const formattedDate = format(date, "EEEE, MMMM d");
  const formattedOpenHour = format(
    setMinutes(new Date(date).setHours(open), 0),
    "hh:mm a",
  );
  const formattedCloseHour = format(
    setMinutes(new Date(date).setHours(close), 0),
    "hh:mm a",
  );

  function handleSelectDate(newDate) {
    setDate(newDate);
    setSelectedTime("");
  }

  function handleSelectTime(e) {
    setSelectedTime(e.target.value);
  }

  function handleSelectGuests(e) {
    setNumGuests(+e.target.value);
  }

  function handleSelectDuration(e) {
    setDuration(+e.target.value);
  }

  // useEffect(() => {
  //   if (selectedTime) {
  //     setDate((prevDate) => {
  //       const [hours, minutes, period] = selectedTime.split(/:| /);

  //       const adjustedHours =
  //         period === "PM" && hours !== "12"
  //           ? parseInt(hours, 10) + 12
  //           : parseInt(hours, 10);

  //       return setMinutes(
  //         setHours(prevDate, adjustedHours),
  //         parseInt(minutes, 10),
  //       );
  //     });
  //   }
  // }, [selectedTime]);

  async function handleCheckAvailability() {
    if (!date || !selectedTime || !duration || !numGuests) return;
    setIsChecking(true);

    const availabilityStatus = await checkAvailability(
      date,
      selectedTime,
      duration,
      numGuests,
    );
    console.log(availabilityStatus);

    if (availabilityStatus === "invalid time") {
      setIsAvailable(false);
      setMessage(
        "We're sorry, but the selected duration extends beyond our closing hours. Please choose a shorter duration or an earlier time.",
      );
    }
    if (availabilityStatus === "full capacity") {
      setIsAvailable(false);
      setMessage(
        "We're sorry, but the selected date and time are currently fully booked. Please choose an alternative date or time.",
      );
    }
    if (availabilityStatus === "ok") {
      setIsAvailable(true);
      setMessage(
        "Your reservation is available! To proceed, please provide the required details in the form below. We look forward to welcoming you.",
      );
    }

    setIsChecking(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !selectedTime || !numGuests || !duration) return;
    const selectedDate = format(Date.parse(date), "EEEE yyyy-MM-dd HH:mm");
    dispatch(updateDate(selectedDate));
    dispatch(updateGuests(numGuests));
    dispatch(updateDuration(duration));
  }

  // console.log(date);
  // console.log(numGuests);
  // console.log(duration);

  return (
    <section className="bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <Form method="POST">
        <div className={`${isAvailable ? "invisible" : ""}`}>
          <Calendar
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            view="month"
            onClickDay={handleSelectDate}
          />
          <input type="hidden" name="date" value={date} required />
          <p className="text-white">
            On {formattedDate}, we are open from {formattedOpenHour} to{" "}
            {formattedCloseHour}.
          </p>
          <select
            name="time"
            required
            onChange={handleSelectTime}
            value={selectedTime}
          >
            <option value="">- Select time -</option>
            {allReservationTimes.map((time, i) => (
              <option key={i} value={time}>
                {time}
              </option>
            ))}
          </select>
          <select
            name="numGuests"
            onChange={handleSelectGuests}
            value={numGuests}
            required
          >
            <option value="">- Select number of guests -</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <select
            name="duration"
            onChange={handleSelectDuration}
            value={duration}
            required
          >
            <option value="">- Select duration -</option>
            <option value="1">1 hour</option>
            <option value="1.5">1.5 hours</option>
            <option value="2">2 hours</option>
            <option value="2.5">2.5 hours</option>
            <option value="3">3 hours</option>
          </select>
          <button
            type="button"
            className={`text-white ${isChecking ? "cursor-not-allowed" : ""}`}
            onClick={handleCheckAvailability}
            disabled={isChecking}
          >
            {isChecking ? "Checking..." : "Check availability"}
          </button>
          <p className="text-white">{message}</p>
        </div>
        <div className={`${!isAvailable ? "invisible" : ""}`}>
          <p className="text-white">{message}</p>
          <button className="text-white" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Making reservation..." : "Reserve"}
          </button>
        </div>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const { date, time, numGuests, duration } = Object.fromEntries(formData);
  const reservationDate = formatDate(date);

  const [startTime, endTime] = calculateStartEndTime(time, duration);

  const reservation = {
    date: reservationDate,
    from: startTime,
    to: endTime,
    guests: numGuests,
  };

  console.log(reservation);
  const errors = {};
  if (Object.keys(errors).length > 0) return errors;

  const newReservation = await makeReservation(reservation);
  console.log(newReservation.id);

  if (reservation.preorder) return redirect("/menu");
  return null;
}

export default MakeReservation;
