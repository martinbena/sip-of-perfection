import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { useEffect } from "react";
import UpdateReservation from "./UpdateReservation";
import CancelReservation from "./CancelReservation";
import ReservationSummary from "../../ui/ReservationSummary";

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
    <section className="overflow-hidden bg-brandshade py-40">
      <ReservationSummary reservation={reservation} />
      <div className="">
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
