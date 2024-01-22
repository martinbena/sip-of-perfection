import { calculateStartEndTime, formatDate } from "../utilities/helpers";
import { Form, redirect } from "react-router-dom";
import { makeReservation } from "../services/apiCafe";
import { FormProvider } from "../contexts/FormContext";
import SearchReservation from "../features/reservation/SearchReservation";
import store from "../store";
import { clearCart } from "../features/cart/cartSlice";
import Subhero from "../ui/Subhero";
import ReservationInfo from "../ui/ReservationInfo";
import FormContainer from "../ui/FormContainer";
import { Toaster } from "react-hot-toast";
import { useToast } from "../hooks/useToast";

// const isValidFullName = (str) =>
//   /^[\p{L}'’-]{2,}(?:\s[\p{L}'’-]{2,})*$/u.test(str);
const isValidFullName = (str) => {
  const nameParts = str.split(/\s+/);

  if (nameParts.length < 2) {
    return false;
  }

  const isValidFirstTwoParts = nameParts
    .slice(0, 2)
    .every((part, index) =>
      index < 2 ? /^[\p{L}'’-]{2,}$/u.test(part) : true,
    );

  return isValidFirstTwoParts;
};

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
const isValidEmail = (str) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str);

function MakeReservation() {
  return (
    <>
      <Subhero
        background="bg-reservation"
        title="Reservation"
        subtitle="Secure your spot or find existing reservations effortlessly."
      />
      <section className="overflow-hidden bg-brandshade py-24">
        <SearchReservation />
        <ReservationInfo />
        <Form method="POST">
          <FormProvider>
            <FormContainer />
          </FormProvider>
        </Form>
      </section>
      <Toaster />
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const {
    date,
    time,
    numGuests,
    duration,
    fullName,
    email,
    phone,
    note,
    cart,
  } = Object.fromEntries(formData);
  const reservationDate = formatDate(date);

  const [startTime, endTime] = calculateStartEndTime(time, duration);

  const reservation = {
    date: reservationDate,
    from: startTime,
    to: endTime,
    guests: +numGuests,
    fullName,
    email,
    phone,
    note,
    preorder: JSON.parse(cart),
  };
  const errors = {};
  if (!isValidFullName(fullName))
    errors.fullName =
      "Please give us your correct full name. We will need it upon your arrival.";
  if (!isValidPhone(phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  if (!isValidEmail(email))
    errors.email =
      "Please give us your correct e-mail address. We might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  const newReservation = await makeReservation(reservation);
  store.dispatch(clearCart());
  useToast("success", "Reservation successfully created!");

  return redirect(`/reservation/${newReservation.id}`);
}

export default MakeReservation;
