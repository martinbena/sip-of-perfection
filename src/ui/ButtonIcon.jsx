import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function ButtonIcon({ direction, onClick }) {
  const translate =
    direction === "left" ? "-translate-x-1/2" : "translate-x-1/2";
  const icon = direction === "left" ? <BsChevronLeft /> : <BsChevronRight />;
  const directionClass = direction === "left" ? "left-0" : "right-0";
  const ariaLabel =
    direction === "left" ? "See previous testimonial" : "See next testimonial";

  return (
    <button
      className={`${translate} absolute top-1/2 ${directionClass} hover-child:scale-150 focus-child:scale-150 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-carouselimg focus:outline-none focus:ring focus:ring-linkhover focus:ring-offset-2 child:h-6 child:w-6 child:transition-all child:duration-300 child:ease-linear`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
