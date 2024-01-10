import { useMenuContext } from "./MenuContext";
import Searchbar from "../../ui/Searchbar";

function SearchMenuItem() {
  const { searchTerm, dispatch, ACTIONS } = useMenuContext();

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="mob:text-sm">Search in selected category:</p>
      <Searchbar
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
  );
}

export default SearchMenuItem;
