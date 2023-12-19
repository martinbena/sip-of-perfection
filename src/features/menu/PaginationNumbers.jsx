import { useSelector } from "react-redux";
import { getAvailablePages } from "../../utilities/helpers";
import { useMenuContext } from "./MenuContext";
import { getNavHeight } from "../../navigationSlice";

function PaginationNumbers() {
  const { currentPage, maxPages, dispatch, ACTIONS, menuRef } =
    useMenuContext();
  const allPages = getAvailablePages(maxPages);
  const displayRange = [
    allPages[0],
    currentPage,
    allPages[allPages.length - 1],
  ];
  const navHeight = useSelector(getNavHeight);

  function handleDispatch(page) {
    dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: page });

    if (menuRef.current) {
      const scrollPosition = menuRef.current.offsetTop - navHeight - 20;
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {allPages.map((page, i) => {
        const isSmallScreen = window.innerWidth < 545;
        const shouldDisplay =
          displayRange.includes(i + 1) ||
          (currentPage === displayRange[2] && i === currentPage - 2) ||
          (currentPage === displayRange[0] && i === currentPage);

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
            onClick={() => handleDispatch(page)}
            disabled={currentPage === i + 1}
          >
            <span>
              {isSmallScreen &&
                i + 1 === displayRange[2] &&
                i + 1 !== currentPage &&
                "..."}
              {page}
              {isSmallScreen &&
                i + 1 === displayRange[0] &&
                i + 1 !== currentPage &&
                "..."}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default PaginationNumbers;
