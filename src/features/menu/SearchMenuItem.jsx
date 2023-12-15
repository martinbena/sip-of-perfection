import { useRef } from "react";
import { useMenuContext } from "./MenuContext";
import { GiMagnifyingGlass } from "react-icons/gi";

function SearchMenuItem() {
  const { searchTerm, dispatch, ACTIONS } = useMenuContext();
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current && inputRef.current.focus();
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <p>Search in selected category:</p>
      <div
        onClick={focusInput}
        className="searchbar shadow-menu-inputs flex w-96 items-center gap-8 rounded-full bg-white px-6 py-3 focus-within:outline focus-within:outline-2 focus-within:outline-commontext"
      >
        <GiMagnifyingGlass className="h-8 w-8" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search item..."
          className="w-full focus:outline-none"
          value={searchTerm}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHANGE_SEARCH_TERM,
              payload: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}

export default SearchMenuItem;
