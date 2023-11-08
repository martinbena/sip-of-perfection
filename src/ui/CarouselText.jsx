function CarouselText({ items, index }) {
  return (
    <>
      <blockquote className="text-white">
        <p className="mb-8 mt-8 h-28">“{items[index].statement}”</p>
        <p className="text-sm">&ndash; {items[index].name}</p>
      </blockquote>
    </>
  );
}

export default CarouselText;
