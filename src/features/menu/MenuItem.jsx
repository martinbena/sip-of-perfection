import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ item }) {
  const dispatch = useDispatch();

  const {
    id,
    name,
    category,
    ingredients,
    imageUrl,
    price,
    seasonality,
    availability,
  } = item;

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

  return (
    <li className="tab:py-2">
      <div className="grid grid-cols-[1fr_2fr] gap-8 tablg:gap-2 tab:grid-cols-[auto_1fr] tab:gap-8 mob:gap-2 mobsm:grid-cols-1 mobsm:justify-items-center mobsm:gap-4 mobsm:text-center">
        <div className="h-36 tab:h-28 mobsm:justify-self-center">
          <img className="h-36 rounded-lg tab:h-28" src={imageUrl} alt={name} />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-1 font-semibold leading-6 ">{name}</p>
            <p className="text-sm italic leading-6 mobsm:mb-4">
              {ingredients.join(", ")}
            </p>
          </div>
          <div className="tab:flex tab:items-center tab:justify-between mobsm:justify-center mobsm:gap-8">
            <p className="mb-1 font-medium tab:mb-0">{formatCurrency(price)}</p>

            {!isInCart && (
              <div>
                <Button onClick={handlePreorder} type="tertiary">
                  Pre-order
                </Button>
              </div>
            )}
            {isInCart && (
              <div className="flex items-center justify-between gap-3 tab:gap-8 mob:gap-3">
                <UpdateItemQuantity id={id} quantity={currentQuantity} />
                <DeleteItem id={id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
