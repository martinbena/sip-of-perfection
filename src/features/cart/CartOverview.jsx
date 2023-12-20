import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  if (!totalCartQuantity) return null;

  return (
    <div className="shadow-cart fixed bottom-0 left-0 w-full bg-brand">
      <div className="mx-auto flex max-w-9xl items-center justify-around px-16 py-4 child:space-x-12 tab:justify-between tab:child:space-x-6 moblg:px-8 mob:px-4 mobsm:flex-col mobsm:gap-2">
        <p className="font-semibold uppercase">
          <span>
            {totalCartQuantity} {totalCartQuantity === 1 ? "item" : "items"}
          </span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
        <div className="">
          <Button type="tertiary" onClick={() => dispatch(clearCart())}>
            Clear pre-order
          </Button>
          <Button type="tertiary" to="/reservation/new">
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartOverview;
