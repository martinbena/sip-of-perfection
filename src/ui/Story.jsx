import Button from "./Button";
import HeadingSecondary from "./HeadingSecondary";

function Story() {
  return (
    <section className="bg-story-pattern bg-left-bottom bg-no-repeat px-8 py-24 tab:px-20 mob:px-8">
      <div className="m-auto grid max-w-6xl grid-cols-[4fr_5fr] gap-20 dtsm:grid-cols-2 tablg:gap-12 tab:grid-cols-1 tab:gap-16">
        <article className="flex flex-col items-start justify-center tab:items-center tab:text-center">
          <HeadingSecondary>Our story</HeadingSecondary>

          <div className="mb-8 mt-12 space-y-6 tab:mt-9">
            <p>
              Nestled in a serene corner of Portland, our cafe offers a tranquil
              escape from the daily grind. Here, each sip and bite is a
              carefully crafted journey into culinary artistry.
            </p>
            <p>
              Whether you're enjoying a handcrafted coffee blend, savoring
              delectable pastries, or relishing a gourmet meal, every visit is a
              moment to unwind and connect. Join us in creating memories, one
              sip at a time.
            </p>
          </div>
          <Button
            type="secondary"
            to="/contact"
            ariaLabel="Go to the contact page"
          >
            Find us
          </Button>
        </article>
        <div className="flex items-center justify-center">
          <img
            src="/src/assets/coffee-and-cake.png"
            alt="Our coffee and cake"
          />
        </div>
      </div>
    </section>
  );
}

export default Story;
