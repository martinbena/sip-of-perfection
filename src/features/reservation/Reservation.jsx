import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { useEffect } from "react";
import UpdateReservation from "./UpdateReservation";
import CancelReservation from "./CancelReservation";
import ReservationSummary from "../../ui/ReservationSummary";
import { formatCurrency } from "../../utilities/helpers";

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
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="bg-commontext py-3.5 text-center text-white">
          <h3 className="text-lg font-semibold capitalize">
            Pre-order summary
          </h3>
        </div>
        {preorder.length > 0 && (
          <div>
            <ul className="divide-y divide-commontext border-b border-t border-commontext">
              {preorder.map((item) => (
                <li key={item.id} className="space-y-1.5 py-3">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <p>
                      <span className="font-semibold">
                        {item.quantity}&times;
                      </span>{" "}
                      {item.name}
                    </p>
                    <p className="font-semibold">
                      {formatCurrency(item.totalPrice)}
                    </p>
                  </div>
                  <p className="text-xs capitalize italic">
                    {!fetcher.state !== "loading" &&
                      fetcher.data
                        ?.find((el) => el.id === item.id)
                        .ingredients.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center justify-between bg-commontext px-6 py-3.5 font-semibold text-white">
          <p className="text-lg">Estimated price:</p>
          <p>
            {formatCurrency(
              preorder.reduce((sum, item) => sum + item.totalPrice, 0),
            )}
          </p>
        </div>
      </div>
      <UpdateReservation reservation={reservation} menu={fetcher} />
    </section>
  );
}

export async function loader({ params }) {
  const reservation = await getReservation(params.reservationId);
  return reservation;
}

export default Reservation;
