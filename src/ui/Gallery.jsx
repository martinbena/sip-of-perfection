import GalleryItem from "./GalleryItem";

function Gallery() {
  const pictures = [
    {
      title: "Coffee machine",
      src: "src/assets/gallery-coffee-machine.jpg",
    },
    {
      title: "Coffee cake",
      src: "src/assets/gallery-cake.jpg",
    },
    {
      title: "Coffee with croissant",
      src: "src/assets/gallery-coffee-croissant.jpg",
    },
    {
      title: "Barista",
      src: "src/assets/gallery-barista.jpg",
    },
    {
      title: "Tiramisu",
      src: "src/assets/gallery-tiramisu.jpg",
    },
    {
      title: "Coffee pot",
      src: "src/assets/gallery-coffee-pot.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-2 items-center gap-12 py-12 pr-20">
      {pictures.map((pic) => (
        <GalleryItem title={pic.title} src={pic.src} key={pic.title} />
      ))}
    </div>
  );
}

export default Gallery;
