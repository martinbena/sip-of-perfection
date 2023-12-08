import { getAvailablePages } from "../../utilities/helpers";
import { useMenuContext } from "./MenuContext";

function Pagination() {
  const { currentPage, maxPages, dispatch, ACTIONS } = useMenuContext();
  const allPages = getAvailablePages(maxPages);

  return (
    <div className="flex justify-between text-white">
      {currentPage !== 1 && (
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.SET_CURRENT_PAGE,
              payload: currentPage - 1,
            })
          }
        >
          Previous Page
        </button>
      )}
      <div>
        {allPages.map((page, i) => (
          <button
            key={i}
            onClick={() =>
              dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: page })
            }
          >
            {page}
          </button>
        ))}
      </div>
      {currentPage < maxPages && (
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.SET_CURRENT_PAGE,
              payload: currentPage + 1,
            })
          }
        >
          Next page
        </button>
      )}
    </div>
  );
}

export default Pagination;
