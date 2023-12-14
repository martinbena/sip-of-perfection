import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useMenuContext } from "./MenuContext";

function PaginationButton({ direction }) {
  const { currentPage, maxPages, dispatch, ACTIONS } = useMenuContext();

  const icon = direction === "next" ? <BsChevronRight /> : <BsChevronLeft />;

  function handleDispatch() {
    direction === "next" &&
      dispatch({
        type: ACTIONS.SET_CURRENT_PAGE,
        payload: currentPage + 1,
      });
    direction === "previous" &&
      dispatch({
        type: ACTIONS.SET_CURRENT_PAGE,
        payload: currentPage - 1,
      });
  }

  return (
    <button
      className={`rounded-full border-2 border-current p-3 focus:outline-none focus:ring-2 focus:ring-commontext focus:ring-offset-1 focus:ring-offset-current child:h-6 child:w-6 child:transition-all child:duration-300 child:ease-linear hover-child:scale-150 focus-child:scale-150 ${
        direction === "previous" && currentPage === 1
          ? "invisible opacity-0"
          : ""
      } ${
        direction === "next" && currentPage === maxPages
          ? "invisible opacity-0"
          : ""
      }`}
      onClick={handleDispatch}
      disabled={
        (direction === "previous" && currentPage === 1) ||
        (direction === "next" && currentPage === maxPages)
      }
    >
      {icon}
    </button>
  );
}

export default PaginationButton;
