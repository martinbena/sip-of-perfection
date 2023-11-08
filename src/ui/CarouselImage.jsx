function CarouselImage({ items, index }) {
  return (
    <img
      className="absolute right-1/2 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full shadow-carouselimg"
      src={items[index].photo}
      alt={items[index].name}
    />
  );
}

export default CarouselImage;
