function CarouselText({ items, index }) {
  return (
    <>
      <blockquote className="flex h-48 justify-between overflow-hidden text-white dt:h-60 dtsm:h-72 tablg:h-48 tab:h-52 moblg:h-72 mob:h-64 mobsm:h-72 ">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col justify-between">
            <p
              className={`${
                i === index
                  ? "pt-8 transition-all duration-500 ease-in-out mobsm:pb-5 mobsm:text-sm"
                  : "invisible h-0 w-0 -translate-x-full opacity-0"
              }`}
            >
              {item.statement}
            </p>
            <p
              className={`${
                i === index
                  ? "text-sm transition-all duration-500 ease-in-out"
                  : "invisible h-0 w-0 -translate-x-full opacity-0"
              }`}
            >
              &ndash; {item.name}
            </p>
          </div>
        ))}
      </blockquote>
    </>
  );
}

export default CarouselText;
