import { createContext, useContext, useReducer, useRef } from "react";
import { MENU_ITEMS_PER_PAGE } from "../../config/constants";

const MenuContext = createContext();

function MenuProvider({ menu, children }) {
  const menuRef = useRef(null);
  const itemsPerPage = MENU_ITEMS_PER_PAGE;

  const ACTIONS = {
    SELECT_SORT_BY: "select-sort-by",
    VIEW_CATEGORY: "view-category",
    CHANGE_SEARCH_TERM: "change-search-term",
    SET_CURRENT_PAGE: "set-current-page",
  };

  const initialState = {
    sortBy: "default",
    selectedCategory: "default",
    searchTerm: "",
    currentPage: 1,
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SELECT_SORT_BY:
        return { ...state, sortBy: action.payload };
      case ACTIONS.VIEW_CATEGORY:
        return { ...state, selectedCategory: action.payload, currentPage: 1 };
      case ACTIONS.CHANGE_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      case ACTIONS.SET_CURRENT_PAGE:
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  }

  const [{ sortBy, selectedCategory, searchTerm, currentPage }, dispatch] =
    useReducer(reducer, initialState);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredItems =
    selectedCategory === "default"
      ? menu
          .slice()
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
          )
      : menu
          .slice()
          .filter((item) => item.category === selectedCategory)
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

  const maxPages = Math.ceil(sortedItems.length / itemsPerPage);

  const currentItems = sortedItems.slice(startIndex, endIndex);

  return (
    <MenuContext.Provider
      value={{
        menuRef,
        ACTIONS,
        dispatch,
        maxPages,
        currentItems,
        sortBy,
        selectedCategory,
        searchTerm,
        currentPage,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("MenuContext was used outside the MenuContextProvider");
  return context;
}

export { MenuProvider, useMenuContext };
