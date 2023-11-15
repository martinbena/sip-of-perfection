function CarouselText({ items, index }) {
  return (
    <>
      <blockquote className="mobsm:h-full flex h-48 flex-col justify-between text-white dt:h-60 dtsm:h-72 tablg:h-48 tab:h-52 moblg:h-72 mob:h-64">
        <p className="mobsm:text-sm mobsm:pb-5 pt-8">
          “{items[index].statement}”
        </p>
        <p className="text-sm">&ndash; {items[index].name}</p>
      </blockquote>
    </>
  );
}

export default CarouselText;
