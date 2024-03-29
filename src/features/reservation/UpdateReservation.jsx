import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateReservation } from "../../services/apiCafe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, loadCart } from "../cart/cartSlice";
import MenuFunctions from "../menu/MenuFunctions";
import { getNavHeight } from "../../navigationSlice";
import { useToast } from "../../hooks/useToast";

function UpdateReservation({ reservation, menu, forwardedRef }) {
  const fetcher = useFetcher();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navHeight = useSelector(getNavHeight);

  function scrollIntoSummary() {
    if (forwardedRef.current) {
      const scrollPosition = forwardedRef.current.offsetTop - navHeight - 20;
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    if (!isHidden) dispatch(loadCart(reservation.preorder));

    return () => dispatch(clearCart());
  }, [isHidden]);

  useEffect(() => {
    if (fetcher.state === "submitting") {
      setIsSubmitting(true);
      setTimeout(scrollIntoSummary, 100);
    }
  }, [fetcher.state, forwardedRef.current]);

  useEffect(() => {
    setIsHidden(true);
    setIsSubmitting(false);
  }, [reservation.preorder]);

  return (
    <fetcher.Form method="PATCH">
      <div className="mx-auto flex max-w-4xl justify-between tab:gap-12 tab:px-4 mob:flex-col mob:items-center">
        <div className="mob:order-2">
          <Button
            type="primary-warn"
            onClick={() => {
              setIsHidden((hidden) => !hidden);
            }}
          >
            {isHidden ? "Open menu" : "Close menu"}
          </Button>
        </div>
        <div className="mob:order-1">
          <Button
            type="primary"
            disabled={
              isHidden ||
              JSON.stringify(reservation.preorder) === JSON.stringify(cart) ||
              isSubmitting
            }
          >
            {isSubmitting ? "Loading..." : "Update pre-order"}
          </Button>
        </div>
      </div>
      {!isHidden && (
        <div className="mt-12">
          <MenuFunctions menu={menu.data} />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>
      )}
    </fetcher.Form>
  );
}

export default UpdateReservation;

export async function action({ request, params }) {
  const formData = await request.formData();
  const { cart } = Object.fromEntries(formData);
  const data = { preorder: JSON.parse(cart) };
  try {
    await updateReservation(params.reservationId, data);
    useToast("success", "Reservation successfully updated!");
  } catch (err) {
    useToast("error", err.message);
  }
  return null;
}
