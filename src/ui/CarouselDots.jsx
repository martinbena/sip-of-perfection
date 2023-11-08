function CarouselDots({ items, onClickHandler, currentIndex }) {
  return (
    <div className="flex items-center justify-center gap-6">
      {items.map((item, index) => (
        <button
          className={`h-4 w-4 rounded-full border-2 border-commontext transition-all duration-300 ease-out ${
            index === currentIndex ? "bg-commontext" : ""
          }`}
          key={index}
          onClick={() => onClickHandler(index)}
        >
          &nbsp;
        </button>
      ))}
    </div>
  );
}

export default CarouselDots;
