import { useMenuContext } from "../../contexts/MenuContext";

function Category({ category }) {
  const { dispatch, ACTIONS, selectedCategory } = useMenuContext();

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dispatch({ type: ACTIONS.VIEW_CATEGORY, payload: category.name });
    }
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 text-lg font-semibold capitalize hover:bg-commontext hover:text-brandshade focus:outline-none focus:ring focus:ring-current focus:ring-offset-2 focus:ring-offset-brandshade tab:text-base mob:border mob:border-commontext mob:p-2 ${
        category.name === selectedCategory
          ? "pointer-events-none bg-commontext text-brandshade"
          : "hover:cursor-pointer"
      }`}
      role="button"
      tabIndex={category.name === selectedCategory ? "-1" : "0"}
      aria-label={`Select ${
        category.name === "default" ? "Whole Menu" : category.name
      }`}
      onClick={() =>
        dispatch({ type: ACTIONS.VIEW_CATEGORY, payload: category.name })
      }
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <span className="child:h-12 child:w-12 tab:child:h-10 tab:child:w-10 mob:hidden">
        {category.icon}
      </span>
      <p>{category.name === "default" ? "Whole menu" : category.name}</p>
    </div>
  );
}

export default Category;
