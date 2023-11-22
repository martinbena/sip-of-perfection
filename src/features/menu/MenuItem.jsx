import { formatCurrency } from "../../utilities/helpers";

function MenuItem({ item }) {
  const {
    name,
    category,
    ingredients,
    imageUrl,
    price,
    seasonality,
    availability,
  } = item;

  return (
    <li>
      <div className="flex items-center justify-around gap-12 text-white">
        <img className="h-12 w-12" src={imageUrl} alt={name} />
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
      </div>
    </li>
  );
}

export default MenuItem;
