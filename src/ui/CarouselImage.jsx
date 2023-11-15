function CarouselImage({ items, index }) {
  return (
    <>
      {items.map((item, i) => (
        <img
          // className="absolute right-1/2 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full shadow-carouselimg"
          key={i}
          className={`${
            i === index
              ? "absolute right-1/2 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full shadow-carouselimg transition-all duration-500 ease-out"
              : "invisible h-0 w-0 translate-x-96 opacity-0"
          }`}
          src={item.photo}
          alt={item.name}
        />
      ))}
    </>
  );
}

export default CarouselImage;
