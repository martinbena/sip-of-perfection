import Carousel from "./Carousel";
import HeadingSecondary from "./HeadingSecondary";
import testimonials from "../data/testimonials.json";

function Testimonials() {
  return (
    <article className="flex flex-col items-center justify-center p-24 tab:px-8 tab:pb-12 [&>*:nth-child(1)]:mb-36 mobsm:[&>*:nth-child(1)]:text-center">
      <HeadingSecondary>The cafe experience</HeadingSecondary>
      <Carousel items={testimonials} />
    </article>
  );
}

export default Testimonials;
