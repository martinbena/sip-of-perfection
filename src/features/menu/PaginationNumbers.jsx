import { getAvailablePages } from "../../utilities/helpers";
import { useMenuContext } from "./MenuContext";

function PaginationNumbers() {
  const { currentPage, maxPages, dispatch, ACTIONS } = useMenuContext();
  const allPages = getAvailablePages(maxPages);
  return (
    <div className="flex gap-4">
      {allPages.map((page, i) => (
        <button
          className={`flex h-9 w-9 items-center justify-center rounded-full p-2 hover:bg-commontext hover:text-brandshade focus:outline-none focus:ring-2 focus:ring-commontext  ${
            currentPage === i + 1
              ? "bg-commontext text-brandshade focus:ring-offset-4 focus:ring-offset-brandshade"
              : " focus:ring-offset-1 focus:ring-offset-commontext"
          }`}
          key={i}
          onClick={() =>
            dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: page })
          }
          disabled={currentPage === i + 1}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PaginationNumbers;
