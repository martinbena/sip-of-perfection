import Carousel from "./Carousel";
import HeadingSecondary from "./HeadingSecondary";

function Testimonials() {
  return (
    <article className="flex flex-col items-center justify-center p-24 [&>*:nth-child(1)]:mb-36">
      <HeadingSecondary>The cafe experience</HeadingSecondary>
      <Carousel />
    </article>
  );
}

export default Testimonials;
