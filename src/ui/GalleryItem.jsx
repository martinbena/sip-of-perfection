function GalleryItem({ title, src }) {
  return (
    <figure className="overflow-hidden will-change-transform">
      <img
        className="transition-transform duration-500 hover:scale-110"
        src={src}
        alt={title}
      />
    </figure>
  );
}

export default GalleryItem;
