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
    <li>
      <div className="grid grid-cols-[1fr_2fr] gap-8">
        <div className="h-36">
          <img className="h-36 rounded-lg" src={imageUrl} alt={name} />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-2 font-semibold leading-6">{name}</p>
            <p className="text-sm italic">{ingredients.join(", ")}</p>
          </div>
          <div>
            <p className="mb-1 font-medium">{formatCurrency(price)}</p>

            {!isInCart && (
              <div>
                <Button onClick={handlePreorder} type="tertiary">
                  Pre-order
                </Button>
              </div>
            )}
            {isInCart && (
              <div className="flex items-center justify-between gap-3 sm:gap-8">
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
