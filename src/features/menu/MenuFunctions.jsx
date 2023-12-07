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
    SET_FILTER: "set-filter",
    CHANGE_SEARCH_TERM: "change-search-term",
  };

  const initialState = {
    sortBy: "default",
    filter: "default",
    searchTerm: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SELECT_SORT_BY:
        return { ...state, sortBy: action.payload };
      case ACTIONS.SET_FILTER:
        return { ...state, filter: action.payload };
      case ACTIONS.CHANGE_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      default:
        return state;
    }
  }

  const [{ sortBy, filter, searchTerm }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const filteredItems =
    filter === "default"
      ? menu
          .slice()
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
      : menu
          .slice()
          .filter((item) => item.category === filter)
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );

  let sortedItems;
  if (sortBy === "default") sortedItems = filteredItems;
  if (sortBy === "nameAZ")
    sortedItems = filteredItems
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "nameZA")
    sortedItems = filteredItems
      .slice()
      .sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === "price01")
    sortedItems = filteredItems.slice().sort((a, b) => a.price - b.price);
  if (sortBy === "price10")
    sortedItems = filteredItems.slice().sort((a, b) => b.price - a.price);

  const currentItems = sortedItems.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search item..."
          value={searchTerm}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHANGE_SEARCH_TERM,
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="text-white">
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.SET_FILTER, payload: "default" })
          }
        >
          Whole menu
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.SET_FILTER, payload: "Coffee" })
          }
        >
          Coffee
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.SET_FILTER, payload: "Desserts" })
          }
        >
          Desserts
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.SET_FILTER, payload: "Specialty drinks" })
          }
        >
          Secialty Drinks
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.SET_FILTER, payload: "Tea" })}
        >
          Tea
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.SET_FILTER, payload: "Breakfast" })
          }
        >
          Breakfast
        </button>
        <select
          className="text-black"
          name="sortBy"
          value={sortBy}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SELECT_SORT_BY, payload: e.target.value })
          }
        >
          <option value="default">Default order</option>
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
