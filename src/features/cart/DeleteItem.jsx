import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id, name }) {
  const dispatch = useDispatch();

  return (
    <Button
      type="tertiary"
      onClick={() => dispatch(deleteItem(id))}
      ariaLabel={`Remove every ${name} from your pre-order`}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
