import { useMenuContext } from "../../contexts/MenuContext";

function SortMenu() {
  const { sortBy, dispatch, ACTIONS } = useMenuContext();

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <p className="mob:text-sm">Sort by:</p>
      <select
        className="w-96 cursor-pointer rounded-full py-4 text-center shadow-menu-inputs focus:outline focus:outline-2 focus:outline-commontext mob:py-2 mobsm:w-full"
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
