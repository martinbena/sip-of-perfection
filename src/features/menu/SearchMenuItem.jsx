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
    <div className="flex w-full flex-col items-center gap-2">
      <p className="mob:text-sm">Search in selected category:</p>
      <div
        onClick={focusInput}
        className="searchbar flex w-96 items-center gap-8 rounded-full bg-white px-6 py-3 shadow-menu-inputs focus-within:outline focus-within:outline-2 focus-within:outline-commontext mob:py-1.5 mobsm:w-full mobsm:w-full"
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
