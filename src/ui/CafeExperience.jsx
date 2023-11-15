import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

function CafeExperience() {
  return (
    <section className="bg-brandtint">
      <div className="max-w-8xl mx-auto grid grid-cols-[55fr_45fr] tablg:grid-cols-1">
        <Testimonials />
        <Gallery />
      </div>
    </section>
  );
}

export default CafeExperience;
