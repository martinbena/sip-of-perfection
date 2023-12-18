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

// screens: {
//       dtxl: { min: "2540px" },
//       dt: { max: "1540px" },
//       dtsm: { max: "1344px" },
//       tablg: { max: "1200px" },
//       tab: { max: "944px" },
//       moblg: { max: "704px" },
//       mob: { max: "544px" },
//       mobsm: { max: "440px" },
//     },

function Categories() {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-between gap-8 tablg:justify-center tablg:px-8 mob:gap-2">
      {categories.map((category) => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
}

export default Categories;
