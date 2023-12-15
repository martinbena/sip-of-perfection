import { useMenuContext } from "./MenuContext";

function SortMenu() {
  const { sortBy, dispatch, ACTIONS } = useMenuContext();

  return (
    <div className="flex flex-col items-center gap-2">
      <p>Sort by:</p>
      <select
        className="shadow-menu-inputs w-96 cursor-pointer rounded-full py-4 text-center focus:outline focus:outline-2 focus:outline-commontext"
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
  );
}

export default SortMenu;
