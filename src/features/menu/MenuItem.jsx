import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency, getSeason } from "../../utilities/helpers";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { useEffect, useState } from "react";
import { getMonth } from "date-fns";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const [isAvailable, setIsAvailable] = useState(true);

  const { id, name, ingredients, imageUrl, price, seasonality } = item;

  const isSeasonal = seasonality !== "year";

  const currentQuantity = useSelector(getCurrentItemQuantity(id));
  const isInCart = currentQuantity > 0;

  function handlePreorder() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  useEffect(() => {
    if (isSeasonal) {
      const currentMonth = getMonth(new Date());
      const season = getSeason(currentMonth);

      if (seasonality !== season) setIsAvailable(false);
      if (seasonality === season) setIsAvailable(true);
    }
  }, [isSeasonal, seasonality, setIsAvailable]);

  return (
    <li className="tab:py-2">
      <div className="grid grid-cols-[1fr_2fr] gap-8 tablg:gap-2 tab:grid-cols-[auto_1fr] tab:gap-8 mob:gap-2 mobsm:grid-cols-1 mobsm:justify-items-center mobsm:gap-4 mobsm:text-center">
        <div
          className={`h-36 w-max overflow-hidden rounded-lg tab:h-28 mobsm:justify-self-center ${
            isSeasonal
              ? "relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:overflow-hidden after:px-12 after:py-0.5 after:text-sm after:font-semibold after:uppercase after:text-btntext after:content-['Seasonal']"
              : ""
          } ${seasonality === "spring" ? "after:bg-lime-400" : ""} ${
            seasonality === "summer" ? "after:bg-rose-400" : ""
          } ${seasonality === "autumn" ? "after:bg-orange-400" : ""} ${
            seasonality === "winter" ? "after:bg-sky-400" : ""
          }`}
        >
          <img
            className={`h-36 tab:h-28 ${
              !isAvailable ? "opacity-75 grayscale" : ""
            }`}
            src={imageUrl}
            alt={name}
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-1 font-semibold leading-6 ">{name}</p>
            <p className="text-sm italic leading-6 mobsm:mb-4">
              {ingredients.join(", ")}
            </p>
          </div>
          <div className="tab:flex tab:items-center tab:justify-between mobsm:justify-center mobsm:gap-8">
            <p
              className={`mb-1 font-medium tab:mb-0 ${
                !isAvailable ? "text-sm uppercase" : ""
              }`}
            >
              {isAvailable ? formatCurrency(price) : "Not available"}
            </p>

            {isAvailable && !isInCart && (
              <div>
                <Button
                  onClick={handlePreorder}
                  type="tertiary"
                  ariaLabel={`Pre-order ${name} for ${price} USD`}
                >
                  Pre-order
                </Button>
              </div>
            )}
            {isInCart && (
              <div className="flex items-center justify-between gap-3 tab:gap-8 mob:gap-3">
                <UpdateItemQuantity
                  id={id}
                  quantity={currentQuantity}
                  name={name}
                />
                <DeleteItem id={id} name={name} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
