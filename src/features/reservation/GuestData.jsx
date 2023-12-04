import { useNavigation } from "react-router-dom";
import { useFormContext } from "./FormContext";

function GuestData() {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";
  const { ACTIONS, state, dispatch, formattedDate } = useFormContext();
  const { selectedTime, numGuests, duration, isAvailable, message } = state;
  return (
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
          You are making reservation on {formattedDate} from {selectedTime} for{" "}
          {duration} hours. The number of guests is {numGuests}
        </p>
        <button
          type="button"
          className="text-white"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_AVAILABILITY, payload: false })
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
  );
}

export default GuestData;
