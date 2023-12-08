import Category from "./Category";

const categories = [
  {
    name: "default",
    icon: "",
  },
  {
    name: "Coffee",
    icon: "",
  },
  {
    name: "Desserts",
    icon: "",
  },
  {
    name: "Specialty drinks",
    icon: "",
  },
  {
    name: "Tea",
    icon: "",
  },
  {
    name: "Breakfast",
    icon: "",
  },
];

function Categories({ dispatch, ACTIONS }) {
  return (
    <div>
      {categories.map((category) => (
        <Category
          key={category.name}
          category={category}
          dispatch={dispatch}
          ACTIONS={ACTIONS}
        />
      ))}
    </div>
  );
}

export default Categories;
