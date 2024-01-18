import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../ui/Searchbar";
import ReservationStatus from "../../ui/ReservationStatus";
import { PiWarning } from "react-icons/pi";

function SearchReservation() {
  const [query, setQuery] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsTouched(true);
    if (query.length !== 20) return;
    navigate(`/reservation/${query}`);
    setQuery("");
  }

  return (
    <div className="mx-auto max-w-8xl px-16 mob:px-2">
      <form aria-label="Search your reservation" onSubmit={handleSubmit}>
        <div
          className={`ml-auto w-96 ${
            isTouched && query !== 20 ? "flex flex-col gap-2" : ""
          }`}
        >
          <Searchbar
            placeholder="Search reservation ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            inputIsInvalid={isTouched && query.length !== 20}
          />
          {isTouched && query.length !== 20 && (
            <ReservationStatus
              type="danger"
              status="Please insert a valid ID."
              icon={<PiWarning />}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchReservation;
