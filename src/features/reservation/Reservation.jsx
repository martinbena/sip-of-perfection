import { useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import HeadingPrimary from "../../ui/HeadingPrimary";
import SearchReservation from "./SearchReservation";
import { formatTime } from "../../utilities/helpers";

function Reservation() {
  const reservation = useLoaderData();
  const { id, date, from, to, guests, note } = reservation;

  return (
    <section className="overflow-hidden bg-commontext py-40 text-center">
      <HeadingPrimary>Your resrervation</HeadingPrimary>
      <SearchReservation />
      <div className="text-white">
        <p>Number: {id}</p>
        <p>Date: {date}</p>
        <p>From: {formatTime(from)}</p>
        <p>To: {formatTime(to)}</p>
        <p>Number of guests: {guests}</p>
        {note && <p>Note for us: {note}</p>}
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const reservation = await getReservation(params.reservationId);
  return reservation;
}

export default Reservation;
