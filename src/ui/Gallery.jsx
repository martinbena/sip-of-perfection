import GalleryItem from "./GalleryItem";
import pictures from "../data/galleryData.json";

function Gallery() {
  return (
    <div className="grid grid-cols-2 items-center gap-12 py-12 pr-20 dtsm:gap-6 dtsm:pr-12 tablg:grid-cols-3 tablg:p-12 tab:grid-cols-2 tab:px-8 mob:grid-cols-1">
      {pictures.map((pic) => (
        <GalleryItem title={pic.title} src={pic.src} key={pic.title} />
      ))}
    </div>
  );
}

export default Gallery;
