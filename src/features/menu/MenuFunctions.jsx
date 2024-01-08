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
      </div>
      <div className="mx-auto max-w-screen-xl rounded-lg bg-brandtint p-20 tablg:rounded-none tablg:px-2 tablg:py-8 tab:px-0 mob:py-4">
        <MenuItems />
        <Pagination />
      </div>
    </MenuProvider>
  );
}

export default MenuFunctions;
