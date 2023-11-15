import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

function CafeExperience() {
  return (
    <section className="grid grid-cols-[55fr_45fr] bg-brandtint tablg:grid-cols-1">
      <Testimonials />
      <Gallery />
    </section>
  );
}

export default CafeExperience;
