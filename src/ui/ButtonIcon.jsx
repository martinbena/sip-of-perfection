import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function ButtonIcon({ direction }) {
  const translate =
    direction === "left" ? "-translate-x-1/2" : "translate-x-1/2";
  const icon = direction === "left" ? <BsChevronLeft /> : <BsChevronRight />;

  return (
    <button
      className={`${translate} ${direction}-0 shadow-carouselimg absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white child:h-6 child:w-6`}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
