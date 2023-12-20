import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setUpdated(true);

    const timeout = setTimeout(() => {
      setUpdated(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [totalCartQuantity]);

  if (!totalCartQuantity) return null;

  return (
    <div className="shadow-cart fixed bottom-0 left-0 w-full bg-nav text-white">
      <div className="mx-auto flex max-w-9xl items-center justify-between px-16 py-4 child:space-x-12 tablg:px-8 tab:justify-between tab:child:space-x-6 mob:flex-col mob:gap-2 mob:px-4 mob:child:space-x-3">
        <div className="flex items-center font-semibold">
          <p className="font-heading text-lg">Pre-order:</p>
          <span
            className={`rounded-full transition-all duration-75 ${
              updated ? "text-linkhover" : ""
            }`}
          >
            {totalCartQuantity} {totalCartQuantity === 1 ? "item" : "items"}
          </span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </div>
        <div>
          <Button type="tertiary" onClick={() => dispatch(clearCart())}>
            Clear all
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
