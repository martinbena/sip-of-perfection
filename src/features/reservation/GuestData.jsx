import { useActionData, useNavigation } from "react-router-dom";
import { useFormContext } from "./FormContext";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";

function GuestData() {
  const navigation = useNavigation();
  const isSubmitting = navigation.status === "submitting";
  const { ACTIONS, state, dispatch, formattedDate } = useFormContext();
  const { selectedTime, numGuests, duration, isAvailable, message } = state;
  const cart = useSelector(getCart);
  const formErrors = useActionData();

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
      <label htmlFor="fullName">Full name:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="John Smith"
        required
      />
      {formErrors?.fullName && (
        <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
          {formErrors.fullName}
        </p>
      )}
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="john.smith@gmail.com"
        required
      />
      {formErrors?.email && (
        <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
          {formErrors.email}
        </p>
      )}
      <label htmlFor="phone">Telephone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="123-456-7890"
        required
      />
      {formErrors?.phone && (
        <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
          {formErrors.phone}
        </p>
      )}
      <label htmlFor="note">Note for us:</label>
      <textarea
        name="note"
        id="note"
        placeholder="Let us know about your diet, alergies..."
        cols="30"
        rows="10"
      ></textarea>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
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
