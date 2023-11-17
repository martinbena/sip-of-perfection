import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import CarouselImage from "./CarouselImage";
import CarouselText from "./CarouselText";
import CarouselDots from "./CarouselDots";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((curr) => (curr === 0 ? items.length - 1 : curr - 1));

  const goToNext = () =>
    setCurrentIndex((curr) => (curr === items.length - 1 ? 0 : curr + 1));

  function goToItem(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <div className="relative mb-8 rounded-lg bg-carousel bg-right-bottom bg-no-repeat px-20 py-16 mob:px-8 mob:py-10">
        <CarouselImage items={items} index={currentIndex} />
        <CarouselText items={items} index={currentIndex} />
        <ButtonIcon direction="left" onClick={goToPrevious} />
        <ButtonIcon direction="right" onClick={goToNext} />
      </div>
      <CarouselDots
        items={items}
        onClickHandler={goToItem}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default Carousel;
