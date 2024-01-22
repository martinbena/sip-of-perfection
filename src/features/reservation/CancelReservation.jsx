import { useNavigate } from "react-router-dom";
import { cancelReservation } from "../../services/apiCafe";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";

function CancelReservation({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  function handleCancelation(id) {
    cancelReservation(id);
    navigate("/reservation/new");
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        message="Are you sure that you want to cancel your reservation?"
        onConfirm={() => handleCancelation(id)}
        onCancel={() => setIsModalOpen(false)}
      />
      <Button type="primary-danger" onClick={() => setIsModalOpen(true)}>
        Cancel reservation
      </Button>
    </>
  );
}

export default CancelReservation;
