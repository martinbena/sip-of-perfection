import Pagination from "./Pagination";
import MenuItems from "./MenuItems";
import SearchMenuItem from "./SearchMenuItem";
import Categories from "./Categories";
import SortMenu from "./SortMenu";
import { MenuProvider } from "./MenuContext";

function MenuFunctions({ menu }) {
  return (
    <MenuProvider menu={menu}>
      <div className="mx-auto max-w-screen-lg">
        <Categories />
        <SearchMenuItem />
        <SortMenu />
        <MenuItems />
        <Pagination />
      </div>
    </MenuProvider>
  );
}

export default MenuFunctions;
