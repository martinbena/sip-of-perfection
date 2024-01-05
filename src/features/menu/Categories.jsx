import Category from "./Category";
import { GiKnifeFork } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiCakeSlice } from "react-icons/gi";
import { GiTeapot } from "react-icons/gi";
import { GiDonut } from "react-icons/gi";
import { BiSolidWine } from "react-icons/bi";

const categories = [
  {
    name: "default",
    icon: <GiKnifeFork />,
  },
  {
    name: "Coffee",
    icon: <GiCoffeeCup />,
  },
  {
    name: "Desserts",
    icon: <GiCakeSlice />,
  },
  {
    name: "Specialty drinks",
    icon: <BiSolidWine />,
  },
  {
    name: "Tea",
    icon: <GiTeapot />,
  },
  {
    name: "Breakfast",
    icon: <GiDonut />,
  },
];

function Categories() {
  return (
    <div
      className="mb-12 flex flex-wrap items-center justify-between gap-8 tablg:justify-center tablg:px-8 tab:mb-8 moblg:gap-2 mob:px-4"
      role="tablist"
    >
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}

export default Categories;
