import { useNavigate } from "react-router-dom";
import { cancelReservation } from "../../services/apiCafe";
import Button from "../../ui/Button";

function CancelReservation({ id }) {
  const navigate = useNavigate();

  function handleCancelation(id) {
    if (confirm("Do you really want to cancel the reservation?")) {
      cancelReservation(id);
      navigate("/reservation/new");
    }
  }

  return (
    <Button type="primary-warn" onClick={() => handleCancelation(id)}>
      Cancel reservation
    </Button>
  );
}

export default CancelReservation;
