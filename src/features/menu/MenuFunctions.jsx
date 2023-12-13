import Pagination from "./Pagination";
import MenuItems from "./MenuItems";
import Categories from "./Categories";
import { MenuProvider } from "./MenuContext";
import Inputs from "./Inputs";

function MenuFunctions({ menu }) {
  return (
    <MenuProvider menu={menu}>
      <div className="mx-auto max-w-screen-lg">
        <Categories />
        <Inputs />
        <MenuItems />
        <Pagination />
      </div>
    </MenuProvider>
  );
}

export default MenuFunctions;
