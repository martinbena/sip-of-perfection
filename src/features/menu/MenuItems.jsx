import { useMenuContext } from "./MenuContext";
import MenuItem from "./MenuItem";

function MenuItems() {
  const { currentItems } = useMenuContext();

  return (
    <ul className="grid grid-cols-2 gap-x-20 gap-y-16">
      {currentItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
