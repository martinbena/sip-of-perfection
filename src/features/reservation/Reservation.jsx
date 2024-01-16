import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { useEffect } from "react";
import UpdateReservation from "./UpdateReservation";
import ReservationSummary from "../../ui/ReservationSummary";
import { formatCurrency } from "../../utilities/helpers";
import PreOrderSummary from "../../ui/PreOrderSummary";

function Reservation() {
  const reservation = useLoaderData();
  const { id, preorder } = reservation;

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  return (
    <section className="overflow-hidden bg-brandshade py-40">
      <ReservationSummary reservation={reservation} />
      <PreOrderSummary preorder={preorder} fetcher={fetcher} />
      <UpdateReservation reservation={reservation} menu={fetcher} />
    </section>
  );
}

export async function loader({ params }) {
  const reservation = await getReservation(params.reservationId);
  return reservation;
}

export default Reservation;
