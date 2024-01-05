import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity, name }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-3 mob:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(id))}
        ariaLabel={`Remove one ${name} from your pre-order`}
      >
        -
      </Button>
      <span className="text-sm">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(id))}
        ariaLabel={`Add one ${name} into your pre-order`}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
