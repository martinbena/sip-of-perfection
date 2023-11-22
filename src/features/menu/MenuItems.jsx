import MenuItem from "./MenuItem";

function MenuItems({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
