import { useMenuContext } from "./MenuContext";

function SearchMenuItem() {
  const { searchTerm, dispatch, ACTIONS } = useMenuContext();

  return (
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
  );
}

export default SearchMenuItem;
