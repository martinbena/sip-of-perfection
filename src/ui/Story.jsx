import Button from "./Button";
import HeadingSecondary from "./HeadingSecondary";

function Story() {
  return (
    <section className="bg-story-pattern bg-left-bottom bg-no-repeat py-24">
      <div className="container m-auto grid grid-cols-[4fr_5fr]  gap-24 px-8">
        <article className="flex flex-col items-start justify-center">
          <HeadingSecondary>Our story</HeadingSecondary>

          <div className="mb-8 mt-12 space-y-6">
            <p>
              Nestled in a serene corner of Portland, our cafe offers a tranquil
              escape from the daily grind. Here, each sip and bite is a
              carefully crafted journey into culinary artistry.{" "}
            </p>
            <p>
              Whether you're enjoying a handcrafted coffee blend, savoring
              delectable pastries, or relishing a gourmet meal, every visit is a
              moment to unwind and connect. Join us in creating memories, one
              sip at a time.
            </p>
          </div>
          <Button type="secondary" to="/contact">
            Find us
          </Button>
        </article>
        <div className="flex items-center justify-center">
          <img
            className="max-w-full"
            src="/src/assets/coffee-and-cake.png"
            alt="Our coffee and cake"
          />
        </div>
      </div>
    </section>
  );
}

export default Story;
