import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function ButtonIcon({ direction, onClick }) {
  const translate =
    direction === "left" ? "-translate-x-1/2" : "translate-x-1/2";
  const icon = direction === "left" ? <BsChevronLeft /> : <BsChevronRight />;
  // let position;

  // if (direction === "left") position = "left-0";
  // if (direction === "right") position = "right-0";

  return (
    <button
      className={`${translate} ${direction}-0 absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-carouselimg child:h-6 child:w-6`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
