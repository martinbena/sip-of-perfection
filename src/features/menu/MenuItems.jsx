import MenuItem from "./MenuItem";

function MenuItems({ currentItems }) {
  return (
    <ul>
      {currentItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
