import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentItemQuantity } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";

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
      itemId: id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li>
      <div className="flex items-center justify-around gap-12 text-white">
        <img className="h-12 w-12" src={imageUrl} alt={name} />
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
        {!isInCart && (
          <Button onClick={handlePreorder} type="primary">
            Preorder
          </Button>
        )}
        {isInCart && <DeleteItem itemId={id} />}
      </div>
    </li>
  );
}

export default MenuItem;
