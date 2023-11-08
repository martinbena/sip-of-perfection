function Gallery() {
  const pictures = [
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee machine",
      src: "rc/assets/gallery-coffee-machine.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 items-center gap-12 py-12 pr-20">
      <figure className="overflow-hidden">
        <img
          className="transition-all duration-500 hover:scale-110"
          src="src/assets/gallery-coffee-machine.jpg"
          alt="Coffee Machine"
        />
      </figure>
      <figure>
        <img src="src/assets/gallery-cake.jpg" alt="Coffee Machine" />
      </figure>
      <figure>
        <img
          src="src/assets/gallery-coffee-croisant.jpg"
          alt="Coffee Machine"
        />
      </figure>
      <figure>
        <img src="src/assets/gallery-barista.jpg" alt="Coffee Machine" />
      </figure>
      <figure>
        <img src="src/assets/gallery-tiramisu.jpg" alt="Coffee Machine" />
      </figure>
      <figure>
        <img src="src/assets/gallery-coffee-pot.jpg" alt="Coffee Machine" />
      </figure>
      {/* <figure>
        <img src="src/assets/gallery-coffee-pot.jpg" alt="Coffee Machine" />
      </figure>
      <figure>
        <img src="src/assets/gallery-coffee-pot.jpg" alt="Coffee Machine" />
      </figure>
      <figure>
        <img src="src/assets/gallery-coffee-pot.jpg" alt="Coffee Machine" />
      </figure> */}
    </div>
  );
}

export default Gallery;
