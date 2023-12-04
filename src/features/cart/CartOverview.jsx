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
    <div className="fixed bottom-0 left-0 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} items</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {/* <Link to="/cart">Open cart &rarr;</Link> */}
      <Button type="secondary" onClick={() => dispatch(clearCart())}>
        Clear preorder
      </Button>
    </div>
  );
}

export default CartOverview;
