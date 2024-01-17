import ReservationSummaryItem from "./ReservationSummaryItem";
import { CiUser } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { formatLongDate, formatTime } from "../utilities/helpers";
import CancelReservation from "../features/reservation/CancelReservation";

function ReservationSummary({ reservation }) {
  const { id, date, from, to, guests, note } = reservation;

  return (
    <div className="mx-auto mb-16 max-w-lg rounded-lg bg-brandtint px-16 py-12 shadow-accordion mob:p-6">
      <p className="text-lg font-semibold mobsm:text-base">
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
  );
}

export default ReservationSummary;
