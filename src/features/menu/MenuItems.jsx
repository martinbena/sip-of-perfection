import { useMenuContext } from "./MenuContext";
import MenuItem from "./MenuItem";

function MenuItems() {
  const { menuRef, currentItems, searchTerm } = useMenuContext();

  return (
    <div ref={menuRef} className="tablg:px-2 tab:px-8 mob:px-2">
      <ul className="grid grid-cols-2 gap-x-20 gap-y-16 tablg:gap-2 tablg:gap-y-8 tab:grid-cols-1 tab:gap-0 tab:divide-y tab:divide-commontext">
        {currentItems.length > 0 ? (
          currentItems.map((item) => <MenuItem key={item.id} item={item} />)
        ) : (
          <p className="col-span-2 text-center text-lg font-semibold tab:col-span-1">
            There are no items matching "{searchTerm}".
          </p>
        )}
      </ul>
    </div>
  );
}

export default MenuItems;
