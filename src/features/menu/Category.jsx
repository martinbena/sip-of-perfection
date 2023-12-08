function Category({ category, dispatch, ACTIONS }) {
  return (
    <button
      className="text-white"
      onClick={() =>
        dispatch({ type: ACTIONS.SET_FILTER, payload: category.name })
      }
    >
      {category.name}
    </button>
  );
}

export default Category;
