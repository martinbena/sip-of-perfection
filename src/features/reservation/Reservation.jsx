import { useFetcher, useLoaderData } from "react-router-dom";
import { getReservation } from "../../services/apiCafe";
import { formatLongDate, formatTime } from "../../utilities/helpers";
import { useEffect } from "react";
import UpdateReservation from "./UpdateReservation";
import CancelReservation from "./CancelReservation";
import ReservationSummaryItem from "../../ui/ReservationSummaryItem";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";

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
      <div className="mx-auto max-w-lg rounded-lg bg-brandtint px-16 py-12">
        <p className="text-lg font-semibold">
          Reservation ID:{" "}
          <span className="border-b-2 border-commontext pb-1">{id}</span>
        </p>
        <div className="my-12 flex flex-col gap-6">
          <ReservationSummaryItem icon={<CiCalendar />}>
            {formatLongDate(date)}
          </ReservationSummaryItem>
          <ReservationSummaryItem icon={<CiClock2 />}>
            {formatTime(from)} - {formatTime(to)}
          </ReservationSummaryItem>
          <ReservationSummaryItem icon={<CiUser />}>
            {guests} {guests === 1 ? "guest" : "guests"}
          </ReservationSummaryItem>
          {note && (
            <ReservationSummaryItem icon={<CiChat1 />}>
              "{note}"
            </ReservationSummaryItem>
          )}
        </div>
        <div className="text-center">
          <CancelReservation id={id} />
        </div>
      </div>
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
