import { useMenuContext } from "./MenuContext";

function Category({ category }) {
  const { dispatch, ACTIONS } = useMenuContext();

  return (
    <button
      type="button"
      className="text-white"
      onClick={() =>
        dispatch({ type: ACTIONS.VIEW_CATEGORY, payload: category.name })
      }
    >
      {category.name}
    </button>
  );
}

export default Category;
