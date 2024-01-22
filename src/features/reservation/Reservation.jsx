import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { useEffect, useRef } from "react";
import UpdateReservation from "./UpdateReservation";
import ReservationSummary from "../../ui/ReservationSummary";
import PreOrderSummary from "../../ui/PreOrderSummary";
import HeadingTertiary from "../../ui/HeadingTertiary";
import HeadingSecondary from "../../ui/HeadingSecondary";
import { Toaster } from "react-hot-toast";

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
    <section className="overflow-hidden bg-brandshade py-40 [&>*:nth-child(1)]:mb-12 [&>*:nth-child(1)]:text-center">
      <HeadingSecondary>Reservation info</HeadingSecondary>
      <Toaster />
      <ReservationSummary reservation={reservation} />
      <div className="px-4">
        <PreOrderSummary
          preorder={preorder}
          fetcher={fetcher}
          forwardedRef={summaryRef}
        />
      </div>

      <article className="my-10 bg-brandtint tab:px-4">
        <div className="mx-auto max-w-5xl py-12 mob:text-center">
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
