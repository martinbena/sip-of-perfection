import { useMenuContext } from "./MenuContext";
import MenuItem from "./MenuItem";

function MenuItems() {
  const { currentItems } = useMenuContext();

  return (
    <ul>
      {currentItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
