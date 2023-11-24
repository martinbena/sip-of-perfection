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

function MakeReservation() {
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

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !selectedTime) return;

    return alert(`Rezervováno ve ${date}`);
  }

  console.log(date);

  return (
    <section className="bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <form onSubmit={handleSubmit}>
        <Calendar
          minDate={MIN_DATE}
          maxDate={MAX_DATE}
          view="month"
          onClickDay={handleSelectDate}
          value={date}
        />
        <p className="text-white">
          On {formattedDate}, we are open from {formattedOpenHour} to{" "}
          {formattedCloseHour}.
        </p>
        <select onChange={handleSelectTime} value={selectedTime}>
          <option value="">- Select time -</option>
          {allReservationTimes.map((time, i) => (
            <option key={i} value={time}>
              {time}
            </option>
          ))}
        </select>
        <button className="text-white" type="submit">
          Reserve
        </button>
      </form>
    </section>
  );
}

export default MakeReservation;
