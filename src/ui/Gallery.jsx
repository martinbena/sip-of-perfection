function Gallery() {
  return (
    <div className="grid grid-cols-2 items-center gap-12 py-12 pr-20">
      <figure>
        <img src="src/assets/gallery-coffee-machine.jpg" alt="Coffee Machine" />
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
