import { useMenuContext } from "./MenuContext";

function Category({ category }) {
  const { dispatch, ACTIONS, selectedCategory } = useMenuContext();

  return (
    <button
      type="button"
      className=""
      disabled={selectedCategory === category.name}
      onClick={() =>
        dispatch({ type: ACTIONS.VIEW_CATEGORY, payload: category.name })
      }
    >
      {category.name}
    </button>
  );
}

export default Category;
