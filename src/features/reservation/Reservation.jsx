import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import HeadingPrimary from "../../ui/HeadingPrimary";
import SearchReservation from "./SearchReservation";
import { formatTime } from "../../utilities/helpers";
import { useEffect } from "react";
import UpdateReservation from "./UpdateReservation";
import CancelReservation from "./CancelReservation";

function Reservation() {
  const reservation = useLoaderData();
  const { id, date, from, to, guests, note, preorder } = reservation;

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  return (
    <section className="overflow-hidden bg-brandshade py-40 text-center">
      <HeadingPrimary>Your reservation</HeadingPrimary>
      <SearchReservation />
      <div className="">
        <p>Number: {id}</p>
        <p>Date: {date}</p>
        <p>From: {formatTime(from)}</p>
        <p>To: {formatTime(to)}</p>
        <p>Number of guests: {guests}</p>
        {note && <p>Note for us: {note}</p>}
        {preorder.length > 0 && (
          <>
            <ul>
              {preorder.map((item) => (
                <p key={item.id}>
                  <span>
                    <span>{item.quantity}x</span> {item.name}
                  </span>{" "}
                  <span>{item.totalPrice}</span>{" "}
                  <span>
                    {!fetcher.state !== "loading" &&
                      fetcher.data
                        ?.find((el) => el.id === item.id)
                        .ingredients.join(", ")}
                  </span>
                </p>
              ))}
            </ul>
            <p>
              Estimated price:{" "}
              {preorder.reduce((sum, item) => sum + item.totalPrice, 0)}
            </p>
          </>
        )}
        <CancelReservation id={id} />
        <UpdateReservation reservation={reservation} menu={fetcher} />
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const reservation = await getReservation(params.reservationId);
  return reservation;
}

export default Reservation;
