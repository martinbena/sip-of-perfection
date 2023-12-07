import { useReducer, useState } from "react";
import Pagination from "./Pagination";
import MenuItems from "./MenuItems";
import { MENU_ITEMS_PER_PAGE } from "../../config/constants";

function MenuFunctions({ menu }) {
  const itemsPerPage = MENU_ITEMS_PER_PAGE;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(menu.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const ACTIONS = {
    SELECT_SORT_BY: "select-sort-by",
  };

  const initialState = {
    sortBy: "default",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SELECT_SORT_BY:
        return { ...state, sortBy: action.payload };
      default:
        return state;
    }
  }

  const [{ sortBy }, dispatch] = useReducer(reducer, initialState);

  let sortedItems;
  if (sortBy === "default") sortedItems = menu;
  if (sortBy === "nameAZ")
    sortedItems = menu.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "nameZA")
    sortedItems = menu.slice().sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "price01")
    sortedItems = menu.slice().sort((a, b) => a.price - b.price);
  if (sortBy === "price10")
    sortedItems = menu.slice().sort((a, b) => b.price - a.price);

  const currentItems = sortedItems.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <select
          name="sortBy"
          value={sortBy}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SELECT_SORT_BY, payload: e.target.value })
          }
        >
          <option value="default">Default</option>
          <option value="nameAZ">Name in ascending order</option>
          <option value="nameZA">Name in descending order</option>
          <option value="price01">The most cheap</option>
          <option value="price10">The least cheap</option>
        </select>
      </div>

      <MenuItems currentItems={currentItems} />
      <Pagination
        currentPage={currentPage}
        maxPages={maxPages}
        onSetCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default MenuFunctions;
