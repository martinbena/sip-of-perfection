import { useNavigate } from "react-router-dom";
import { cancelReservation } from "../../services/apiCafe";

function CancelReservation({ id }) {
  const navigate = useNavigate();

  function handleCancelation(id) {
    if (confirm("Do you really want to cancel the reservation?")) {
      cancelReservation(id);
      navigate("/reservation/new");
    }
  }

  return (
    <button onClick={() => handleCancelation(id)}>Cancel reservation</button>
  );
}

export default CancelReservation;
