import { useMenuContext } from "./MenuContext";
import MenuItem from "./MenuItem";

function MenuItems() {
  const { currentItems } = useMenuContext();

  // screens: {
  //       dtxl: { min: "2540px" },
  //       dt: { max: "1540px" },
  //       dtsm: { max: "1344px" },
  //       tablg: { max: "1200px" },
  //       tab: { max: "944px" },
  //       moblg: { max: "704px" },
  //       mob: { max: "544px" },
  //       mobsm: { max: "440px" },
  //     },

  return (
    <ul className="grid grid-cols-2 gap-x-20 gap-y-16 tablg:gap-2 tablg:gap-y-8 tablg:px-2 tab:grid-cols-1 tab:gap-0 tab:divide-y tab:divide-commontext tab:px-8 mob:px-2">
      {currentItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuItems;
