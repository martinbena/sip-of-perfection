import { useMenuContext } from "./MenuContext";
import Searchbar from "../../ui/Searchbar";

function SearchMenuItem() {
  const { searchTerm, currentPage, dispatch, ACTIONS } = useMenuContext();

  function handleChange(e) {
    dispatch({
      type: ACTIONS.CHANGE_SEARCH_TERM,
      payload: e.target.value,
    });
    currentPage !== 1 &&
      dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: 1 });
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="mob:text-sm">Search in selected category:</p>
      <Searchbar
        placeholder="Search item..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchMenuItem;
