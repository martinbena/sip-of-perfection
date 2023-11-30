import { useReducer } from "react";
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
import { format, setMinutes } from "date-fns";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { checkAvailability, makeReservation } from "../services/apiCafe";
import { useDispatch, useSelector } from "react-redux";

function MakeReservation() {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";
  const formErrors = useActionData();
  const dispatchForm = useDispatch();
  const ACTIONS = {
    CHANGE_DATE: "change-date",
    SELECT_TIME: "select-time",
    SET_GUESTS: "set-guests",
    CHOOSE_DURATION: "choose-duration",
    MAKE_AVAILABLE: "make-available",
    MAKE_UNAVAILABLE: "make-unavailable",
    START_CHECKING: "start-checking",
    STOP_CHECKING: "stop-checking",
  };

  const initialState = {
    date: MIN_DATE,
    selectedTime: "",
    numGuests: "",
    duration: "",
    isAvailable: false,
    isChecking: false,
    message: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.CHANGE_DATE:
        return { ...state, date: action.payload, selectedTime: "" };
      case ACTIONS.SELECT_TIME:
        return { ...state, selectedTime: action.payload };
      case ACTIONS.SET_GUESTS:
        return { ...state, numGuests: action.payload };
      case ACTIONS.CHOOSE_DURATION:
        return { ...state, duration: action.payload };
      case ACTIONS.START_CHECKING:
        return { ...state, isChecking: action.payload };
      case ACTIONS.STOP_CHECKING:
        return { ...state, isChecking: action.payload };
      case ACTIONS.MAKE_AVAILABLE:
        return {
          ...state,
          isAvailable: action.payload.isAvailable,
          message: action.payload.message,
        };
      case ACTIONS.MAKE_UNAVAILABLE:
        return {
          ...state,
          isAvailable: action.payload.isAvailable,
          message: action.payload.message,
        };
      default:
        return state;
    }
  }

  const [
    {
      date,
      selectedTime,
      numGuests,
      duration,
      isAvailable,
      isChecking,
      message,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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

  async function handleCheckAvailability() {
    if (!date || !selectedTime || !duration || !numGuests) return;
    dispatch({ type: ACTIONS.START_CHECKING, payload: true });

    const availabilityStatus = await checkAvailability(
      date,
      selectedTime,
      duration,
      numGuests,
    );

    availabilityStatus === "invalid time" &&
      dispatch({
        type: ACTIONS.MAKE_UNAVAILABLE,
        payload: {
          isAvailable: false,
          message:
            "We're sorry, but the selected duration extends beyond our closing hours. Please choose a shorter duration or an earlier time.",
        },
      });

    availabilityStatus === "full capacity" &&
      dispatch({
        type: ACTIONS.MAKE_UNAVAILABLE,
        payload: {
          isAvailable: false,
          message:
            "We're sorry, but the selected date and time are currently fully booked. Please choose an alternative date or time.",
        },
      });

    availabilityStatus === "ok" &&
      dispatch({
        type: ACTIONS.MAKE_UNAVAILABLE,
        payload: {
          isAvailable: true,
          message:
            "Your reservation is available! To proceed, please provide the required details in the form below. We look forward to welcoming you.",
        },
      });

    dispatch({ type: ACTIONS.STOP_CHECKING, payload: false });
  }

  return (
    <section className="overflow-hidden bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <Form method="POST">
        <div
          className={`${
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
          />
          <input type="hidden" name="date" value={date} required />
          <p className="text-white">
            On {formattedDate}, we are open from {formattedOpenHour} to{" "}
            {formattedCloseHour}.
          </p>
          <select
            name="time"
            required
            onChange={(e) =>
              dispatch({ type: ACTIONS.SELECT_TIME, payload: e.target.value })
            }
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
            onChange={(e) =>
              dispatch({ type: ACTIONS.SET_GUESTS, payload: +e.target.value })
            }
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
            onChange={(e) =>
              dispatch({
                type: ACTIONS.CHOOSE_DURATION,
                payload: +e.target.value,
              })
            }
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
        <div
          className={`${
            !isAvailable
              ? "invisible h-0 w-0 translate-x-full"
              : "transition-all duration-500 ease-out"
          } `}
        >
          <div>
            <p className="text-white">{message}</p>
            <p className="text-white">
              You are making reservation on {formattedDate} from {selectedTime}{" "}
              for {duration} hours. The number of guests is {numGuests}
            </p>
            <button
              type="button"
              className="text-white"
              onClick={() =>
                dispatch({ type: ACTIONS.MAKE_UNAVAILABLE, payload: false })
              }
            >
              Change
            </button>
          </div>
          <button
            className="text-white"
            type="submit"
            disabled={isSubmitting || !isAvailable}
          >
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
    guests: +numGuests,
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
