import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../ui/Modal";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const location = useLocation();

  const [updated, setUpdated] = useState(false);

  const isReservationPage = location.pathname.startsWith("/reservation");

  useEffect(() => {
    setUpdated(true);

    const timeout = setTimeout(() => {
      setUpdated(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [totalCartQuantity]);

  function handleClearCart() {
    setIsModalOpen(true);
    if (
      confirm(
        "Are you sure that you want to delete all items from your pre-order?",
      )
    )
      dispatch(clearCart());
  }

  if (!totalCartQuantity) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 z-30 w-full bg-nav text-white shadow-cart">
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
            <Button
              type="tertiary-warn"
              onClick={handleClearCart}
              ariaLabel="Remove all items from your pre-order"
            >
              Clear all
            </Button>
            {!isReservationPage && (
              <Button
                type="tertiary"
                to="/reservation/new"
                ariaLabel="Proceed to reservation"
              >
                Reserve
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartOverview;
