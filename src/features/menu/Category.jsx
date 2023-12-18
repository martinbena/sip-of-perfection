import { useMenuContext } from "./MenuContext";

function Category({ category }) {
  const { dispatch, ACTIONS, selectedCategory } = useMenuContext();

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 text-lg font-semibold capitalize hover:bg-commontext hover:text-brandshade tab:text-base mob:border mob:border-commontext mob:p-2 ${
        category.name === selectedCategory
          ? "pointer-events-none bg-commontext text-brandshade"
          : "hover:cursor-pointer"
      }`}
      onClick={() =>
        dispatch({ type: ACTIONS.VIEW_CATEGORY, payload: category.name })
      }
    >
      <span className="child:h-12 child:w-12 tab:child:h-10 tab:child:w-10 mob:hidden">
        {category.icon}
      </span>
      <p>{category.name === "default" ? "Whole menu" : category.name}</p>
    </div>
  );
}

export default Category;
