import { getAvailablePages } from "../../utilities/helpers";
import { useMenuContext } from "./MenuContext";

function PaginationNumbers() {
  const { currentPage, maxPages, dispatch, ACTIONS } = useMenuContext();
  const allPages = getAvailablePages(maxPages);
  const displayRange = [currentPage - 1, currentPage, currentPage + 1];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {allPages.map((page, i) => {
        const shouldDisplay = displayRange.includes(i + 1);

        return (
          <button
            className={`flex h-9 w-9 items-center justify-center rounded-full p-2 hover:bg-commontext hover:text-brandshade focus:outline-none focus:ring-2 focus:ring-commontext ${
              currentPage === i + 1
                ? "bg-commontext text-brandshade focus:ring-offset-4 focus:ring-offset-brandshade"
                : `focus:ring-offset-1 focus:ring-offset-commontext ${
                    !shouldDisplay && "mob:hidden"
                  }`
            }`}
            key={i}
            onClick={() =>
              dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: page })
            }
            disabled={currentPage === i + 1}
          >
            <span className="hidden mob:inline">
              {(i + 1 === displayRange[0] || i + 1 === displayRange[2]) &&
                "..."}
            </span>
            <span className={`inline ${currentPage !== i + 1 && "mob:hidden"}`}>
              {page}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PaginationNumbers;
