import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function ButtonIcon({ direction, onClick }) {
  const translate =
    direction === "left" ? "-translate-x-1/2" : "translate-x-1/2";
  const icon = direction === "left" ? <BsChevronLeft /> : <BsChevronRight />;
  const directionClass = direction === "left" ? "left-0" : "right-0";

  return (
    <button
      className={`${translate} absolute top-1/2 ${directionClass} flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-carouselimg child:h-6 child:w-6 child:transition-all child:duration-300 child:ease-linear child-hover:scale-150`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
