import Pagination from "./Pagination";
import MenuItems from "./MenuItems";
import SearchMenuItem from "./SearchMenuItem";
import Categories from "./Categories";
import SortMenu from "./SortMenu";
import { MenuProvider } from "./MenuContext";

function MenuFunctions({ menu }) {
  return (
    <MenuProvider menu={menu}>
      <SearchMenuItem />
      <Categories />
      <SortMenu />
      <MenuItems />
      <Pagination />
    </MenuProvider>
  );
}

export default MenuFunctions;
