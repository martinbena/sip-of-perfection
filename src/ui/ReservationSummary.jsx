import ReservationSummaryItem from "./ReservationSummaryItem";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { formatLongDate, formatTime } from "../utilities/helpers";
import CancelReservation from "../features/reservation/CancelReservation";

function ReservationSummary({ reservation, isObsolete }) {
  const { id, date, from, to, guests, note } = reservation;

  return (
    <div className="px-4">
      <div
        className={`shadow-reservation-info mx-auto mb-16 max-w-lg overflow-hidden rounded-lg ${
          isObsolete ? "bg-green-50" : "bg-brandtint"
        }`}
      >
        <img
          src="/assets/chocolate-cake-with-coffee-cup.jpg"
          alt="Our coffee and cake"
          className={`${isObsolete ? "opacity-75 grayscale" : ""}`}
        />
        <div className="flex flex-col gap-12 px-16 py-12 mob:p-6">
          <p className="text-lg font-semibold mobsm:text-base">
            Reservation ID:{" "}
            <span className="border-b-2 border-commontext pb-1">{id}</span>
          </p>
          <div className="flex flex-col gap-6">
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
          {!isObsolete && (
            <div className="text-center">
              <CancelReservation id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationSummary;
