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
import Button from "../../ui/Button";
import { PiWarning } from "react-icons/pi";

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
      className={`mx-auto grid max-w-8xl grid-cols-2 justify-items-center gap-x-6 gap-y-12 px-8 ${
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
      <div className="flex w-full max-w-2xl flex-col gap-9 rounded-lg bg-brandtint p-8 text-center shadow-team">
        <input type="hidden" name="date" value={date} required />
        <p className="mx-auto max-w-max border-b-2 border-commontext pb-1 text-center font-semibold">
          On {formattedDate}, we are open from {formattedOpenHour} to{" "}
          {formattedCloseHour}.
        </p>
        <ReservationSelect
          label="time"
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
          label="guests"
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
          label="duartion"
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
        <div>
          <Button
            type="primary"
            onClick={handleCheckAvailability}
            disabled={isChecking}
          >
            {isChecking ? "Checking..." : "Check availability"}
          </Button>
        </div>
      </div>
      {!isAvailable && message && (
        <div
          className={`col-span-2 flex items-center gap-2 font-semibold ${
            isAvailable ? "" : "text-red-700"
          }`}
        >
          <span className="child:h-6 child:w-6">
            <PiWarning />
          </span>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default DateTimeCheck;
