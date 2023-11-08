import Carousel from "./Carousel";
import HeadingSecondary from "./HeadingSecondary";

const testimonials = [
  {
    name: "Isabella Rodriguez",
    statement:
      "As a regular visitor to this cafe, I'm continually impressed by the exceptional quality of their coffee and the warmth of their welcoming atmosphere. The Java Bliss Coffee Cocktail is a personal favorite.",
    photo: "/src/assets/isabella-rodriguez.jpg",
  },
  {
    name: "Alex Chen",
    statement:
      "This cafe is a hidden treasure. The flavors and quality are beyond compare, and the cozy ambiance provides the perfect escape from the daily grind. I keep coming back for the delightful surprises.",
    photo: "/src/assets/alex-chen.jpg",
  },
  {
    name: "Derrick Williams",
    statement:
      "I've had the pleasure of visiting this cafe multiple times, and each visit leaves me with a sense of serenity and satisfaction. The cafe's offerings are a delightful treat for the senses, making it a favorite destination for me.",
    photo: "/src/assets/derrick-williams.jpg",
  },
  {
    name: "Emily Johnson",
    statement:
      "I stumbled upon this cafe, and it turned out to be a delightful find. The experience here is consistently inviting and comforting. The care and passion behind the cafe's creations shine through, making it a place I eagerly recommend to friends and family.",
    photo: "/src/assets/emily-johnson.jpg",
  },
];

function Testimonials() {
  return (
    <article className="flex flex-col items-center justify-center p-24 [&>*:nth-child(1)]:mb-36">
      <HeadingSecondary>The cafe experience</HeadingSecondary>
      <Carousel items={testimonials} />
    </article>
  );
}

export default Testimonials;
