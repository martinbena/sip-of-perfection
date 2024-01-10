import Calendar from "react-calendar";
import {
  getAvailableTimeSlots,
  getClosingHour,
  getOpeningHour,
} from "../../utilities/helpers";
import { MAX_DATE, MIN_DATE } from "../../config/constants";
import { format, setMinutes } from "date-fns";
import { checkAvailability } from "../../services/apiCafe";
import { useFormContext } from "./FormContext";
import ReservationSelect from "../../ui/ReservationSelect";

function DateTimeCheck() {
  const { ACTIONS, state, dispatch, formattedDate } = useFormContext();
  const {
    date,
    selectedTime,
    numGuests,
    duration,
    isAvailable,
    isChecking,
    message,
  } = state;
  const open = getOpeningHour(date);
  const close = getClosingHour(date);
  const allReservationTimes = getAvailableTimeSlots(date, open, close);

  const formattedOpenHour = format(
    setMinutes(new Date(date).setHours(open), 0),
    "hh:mm a",
  );
  const formattedCloseHour = format(
    setMinutes(new Date(date).setHours(close), 0),
    "hh:mm a",
  );

  async function handleCheckAvailability() {
    if (!date || !selectedTime || !duration || !numGuests) return;
    dispatch({ type: ACTIONS.TOGGLE_CHECK, payload: true });

    const availabilityStatus = await checkAvailability(
      date,
      selectedTime,
      duration,
      numGuests,
    );

    availabilityStatus === "invalid time" &&
      dispatch({
        type: ACTIONS.TOGGLE_AVAILABILITY,
        payload: {
          isAvailable: false,
          message:
            "We're sorry, but the selected duration extends beyond our closing hours. Please choose a shorter duration or an earlier time.",
        },
      });

    availabilityStatus === "full capacity" &&
      dispatch({
        type: ACTIONS.TOGGLE_AVAILABILITY,
        payload: {
          isAvailable: false,
          message:
            "We're sorry, but the selected date and time are currently fully booked. Please choose an alternative date or time.",
        },
      });

    availabilityStatus === "ok" &&
      dispatch({
        type: ACTIONS.TOGGLE_AVAILABILITY,
        payload: {
          isAvailable: true,
          message:
            "Your reservation is available! To proceed, please provide the required details in the form below. We look forward to welcoming you.",
        },
      });

    dispatch({ type: ACTIONS.TOGGLE_CHECK, payload: false });
  }

  return (
    <div
      className={`grid grid-cols-2 ${
        isAvailable
          ? "invisible h-0 w-0 -translate-x-full"
          : "transition-all duration-500 ease-out"
      }`}
    >
      <Calendar
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        view="month"
        onClickDay={(newDate) =>
          dispatch({ type: ACTIONS.CHANGE_DATE, payload: newDate })
        }
        value={date}
      />
      <div>
        <input type="hidden" name="date" value={date} required />
        <p className="font-semibold">
          On {formattedDate}, we are open from {formattedOpenHour} to{" "}
          {formattedCloseHour}.
        </p>
        <ReservationSelect
          name="time"
          value={selectedTime}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SELECT_TIME, payload: e.target.value })
          }
        >
          <option value="">- Select time -</option>
          {allReservationTimes.map((time, i) => (
            <option key={i} value={time}>
              {time}
            </option>
          ))}
        </ReservationSelect>
        <ReservationSelect
          name="numGuests"
          value={numGuests}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_GUESTS, payload: +e.target.value })
          }
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
        </ReservationSelect>
        <ReservationSelect
          name="duration"
          value={duration}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHOOSE_DURATION,
              payload: +e.target.value,
            })
          }
        >
          <option value="">- Select duration -</option>
          <option value="1">1 hour</option>
          <option value="1.5">1.5 hours</option>
          <option value="2">2 hours</option>
          <option value="2.5">2.5 hours</option>
          <option value="3">3 hours</option>
        </ReservationSelect>
        <button
          type="button"
          className={`${isChecking ? "cursor-not-allowed" : ""}`}
          onClick={handleCheckAvailability}
          disabled={isChecking}
        >
          {isChecking ? "Checking..." : "Check availability"}
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default DateTimeCheck;
