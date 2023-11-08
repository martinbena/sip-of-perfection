function GalleryItem({ title, src }) {
  return (
    <figure className="overflow-hidden">
      <img
        className="transition-all duration-500 hover:scale-110"
        src={src}
        alt={title}
      />
    </figure>
  );
}

export default GalleryItem;
