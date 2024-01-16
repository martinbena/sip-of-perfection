import { useFetcher, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { updateReservation } from "../../services/apiCafe";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, loadCart } from "../cart/cartSlice";
import MenuFunctions from "../menu/MenuFunctions";

function UpdateReservation({ reservation, menu }) {
  const fetcher = useFetcher();
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isHidden) dispatch(loadCart(reservation.preorder));

    return () => dispatch(clearCart());
  }, [isHidden]);

  useEffect(() => {
    fetcher.state === "submitting" && setIsSubmitting(true);
  }, [fetcher.state]);

  useEffect(() => {
    setIsHidden(true);
    setIsSubmitting(false);
  }, [reservation.preorder]);

  return (
    <fetcher.Form method="PATCH">
      <div className="mx-auto flex max-w-4xl justify-between">
        <button
          type="button"
          onClick={() => {
            setIsHidden((hidden) => !hidden);
          }}
        >
          {isHidden ? "Show menu" : "Close menu"}
        </button>
        <button
          type="submit"
          disabled={
            JSON.stringify(reservation.preorder) === JSON.stringify(cart) ||
            isSubmitting
          }
        >
          {isSubmitting ? "Loading..." : "Update pre-order"}
        </button>
      </div>

      {!isHidden && (
        <div>
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
  await updateReservation(params.reservationId, data);
  return null;
}
