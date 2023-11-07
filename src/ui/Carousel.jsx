import ButtonIcon from "./ButtonIcon";
import CarouselDots from "./CarouselDots";

function Carousel() {
  return (
    <>
      <div className="max-w-seventy relative mb-8 rounded-lg bg-commontext px-20 py-16">
        <img
          className="shadow-carouselimg absolute right-1/2 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full"
          src="/src/assets/isabella-rodriguez.jpg"
          alt=""
        />
        <blockquote className="text-white">
          <p className="mb-8 mt-8">
            “As a regular visitor to this cafe, I'm continually impressed by the
            exceptional quality of their coffee and the warmth of their
            welcoming atmosphere. The Java Bliss Coffee Cocktail is a personal
            favorite.”
          </p>
          <p className="text-sm">Isabella Rodriguez</p>
        </blockquote>
        <ButtonIcon direction="left" />
        <ButtonIcon direction="right" />
      </div>
      <CarouselDots />
    </>
  );
}

export default Carousel;
