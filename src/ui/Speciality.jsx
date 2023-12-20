import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import HeadingTertiary from "./HeadingTertiary";
import { addItem, getCurrentItemQuantity } from "../features/cart/cartSlice";
import UpdateItemQuantity from "../features/cart/UpdateItemQuantity";
import DeleteItem from "../features/cart/DeleteItem";
import { formatCurrency } from "../utilities/helpers";

function Speciality({ data, isReversed }) {
  const gridClasses = isReversed ? "" : "-order-1 moblg:order-1";

  const { id, name, image, price, description } = data;
  const dispatch = useDispatch();

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
    <div className="flex items-center justify-between tab:gap-10 moblg:flex-col moblg:gap-12 moblg:text-center">
      <img className="h-80 w-56 rounded-speciality" src={image} alt={name} />
      <div className={`${gridClasses} max-w-sixty moblg:max-w-full`}>
        <HeadingTertiary>{name}</HeadingTertiary>
        <p className="mb-6 mt-8">{description}</p>
        {!isInCart && (
          <div>
            <Button onClick={handlePreorder} type="primary">
              Pre-order ({formatCurrency(price)})
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
  );
}

export default Speciality;
