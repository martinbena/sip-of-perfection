import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { useEffect, useRef } from "react";
import UpdateReservation from "./UpdateReservation";
import ReservationSummary from "../../ui/ReservationSummary";
import PreOrderSummary from "../../ui/PreOrderSummary";
import HeadingTertiary from "../../ui/HeadingTertiary";

function Reservation() {
  const reservation = useLoaderData();
  const { preorder } = reservation;
  const summaryRef = useRef();

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
      <PreOrderSummary
        preorder={preorder}
        fetcher={fetcher}
        forwardedRef={summaryRef}
      />
      <article className="my-10 bg-brandtint ">
        <div className="mx-auto max-w-4xl py-12">
          <HeadingTertiary>Personalize your culinary journey</HeadingTertiary>
          <p className="mt-6">
            Consider updating your pre-order or creating one if you haven't
            already to ensure a seamless and delightful dining experience. Click
            below to explore our menu and make any adjustments to your
            selections. Your satisfaction is our priority, and we're here to
            enhance your visit in every way.
          </p>
        </div>
      </article>
      <UpdateReservation
        reservation={reservation}
        menu={fetcher}
        forwardedRef={summaryRef}
      />
    </section>
  );
}

export async function loader({ params }) {
  const reservation = await getReservation(params.reservationId);
  return reservation;
}

export default Reservation;
