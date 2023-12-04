import HeadingPrimary from "../ui/HeadingPrimary";
import { calculateStartEndTime, formatDate } from "../utilities/helpers";
import { Form, redirect, useActionData } from "react-router-dom";
import { makeReservation } from "../services/apiCafe";
import DateTimeCheck from "../features/reservation/DateTimeCheck";
import GuestData from "../features/reservation/GuestData";
import { FormProvider } from "../features/reservation/FormContext";

function MakeReservation() {
  const formErrors = useActionData();

  return (
    <section className="overflow-hidden bg-commontext py-40 text-center">
      <HeadingPrimary>Resrervation</HeadingPrimary>
      <Form method="POST">
        <FormProvider>
          <DateTimeCheck />
          <GuestData />
        </FormProvider>
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
