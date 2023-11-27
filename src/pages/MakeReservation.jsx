import { useEffect, useState } from "react";
import HeadingPrimary from "../ui/HeadingPrimary";
import {
  getAvailableTimeSlots,
  getClosingHour,
  getOpeningHour,
} from "../utilities/helpers";
import { MAX_DATE, MIN_DATE } from "../config/constants";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, setHours, setMinutes } from "date-fns";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { makeReservation } from "../services/apiCafe";

function MakeReservation() {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";

  const formErrors = useActionData();

  const [date, setDate] = useState(MIN_DATE);
  const [selectedTime, setSelectedTime] = useState("");
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

  useEffect(() => {
    if (selectedTime) {
      setDate((prevDate) => {
        const [hours, minutes, period] = selectedTime.split(/:| /);

        const adjustedHours =
          period === "PM" && hours !== "12"
            ? parseInt(hours, 10) + 12
            : parseInt(hours, 10);

        return setMinutes(
          setHours(prevDate, adjustedHours),
          parseInt(minutes, 10),
        );
      });
    }
  }, [selectedTime]);

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (!date || !selectedTime) return;

  //   return alert(`Rezervováno ve ${date}`);
  // }

  // console.log(date);

  return (
    <section className="bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <Form method="POST">
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
        <select required onChange={handleSelectTime} value={selectedTime}>
          <option value="">- Select time -</option>
          {allReservationTimes.map((time, i) => (
            <option key={i} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formErrors?.time && <p>{formErrors.time}</p>}
        <input type="checkbox" name="preorder" id="preorder" />{" "}
        <label className="text-white" htmlFor="preorder">
          Would you like to make a preorder?
        </label>
        <button className="text-white" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Making reservation..." : "Reserve"}
        </button>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const date = format(Date.parse(data.date), "EEEE yyyy-MM-dd HH:mm");

  const reservation = {
    date,
    preorder: data.preorder === "on",
  };

  console.log(reservation);
  const errors = {};
  if (Object.keys(errors).length > 0) return errors;

  // const newReservation = await makeReservation(reservation);
  // console.log(newReservation.id);

  if (reservation.preorder) return redirect("/menu");
  return null;
}

export default MakeReservation;
