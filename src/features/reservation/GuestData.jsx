import { useActionData, useNavigation } from "react-router-dom";
import { useFormContext } from "./FormContext";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { PiCheckBold } from "react-icons/pi";
import Button from "../../ui/Button";
import ReservationInput from "../../ui/ReservationInput";
import ReservationStatus from "../../ui/ReservationStatus";
import FormHeading from "../../ui/FormHeading";

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
          : "transition-all duration-700 ease-out"
      } `}
    >
      <FormHeading>Congratulations! Your Culinary Journey Awaits</FormHeading>
      <div className="mb-8 rounded-lg bg-brandtint py-6">
        <ReservationStatus
          status={message}
          type="success"
          icon={<PiCheckBold />}
          classes="mx-auto max-w-max"
        />

        <p className="mx-auto my-4 max-w-max border-b-2 border-commontext pb-1 text-center font-semibold">
          {`You are making a reservation for ${formattedDate} from ${selectedTime} for ${duration} ${
            duration === 1 ? "hour" : "hours"
          }. The number of guests is ${numGuests}.`}
        </p>
        <div className="text-center">
          <Button
            type="secondary"
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_AVAILABILITY, payload: false })
            }
          >
            Change
          </Button>
        </div>
      </div>
      <div className="rounded-lg bg-brandtint py-6">
        <div className="mb-8 flex justify-center gap-24">
          <div className="flex flex-col gap-5">
            <ReservationInput
              type="text"
              label="Full name"
              name="fullName"
              placeholder="John Smith"
              error={formErrors?.fullName}
            />
            <ReservationInput
              type="email"
              label="E-mail"
              name="email"
              placeholder="john.smith@gmail.com"
              error={formErrors?.email}
            />
            <ReservationInput
              type="tel"
              label="Telephone"
              name="phone"
              placeholder="123-456-7890"
              error={formErrors?.phone}
            />
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          </div>
          <ReservationInput
            type="textarea"
            label="Note for us"
            name="note"
            placeholder="Let us know about your diet, alergies..."
          />
        </div>

        <div className="text-center">
          <Button type="primary" disabled={isSubmitting || !isAvailable}>
            {isSubmitting ? "Making reservation..." : "Reserve"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuestData;
