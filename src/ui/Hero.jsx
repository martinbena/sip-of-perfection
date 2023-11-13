import Button from "./Button";
import HeadingPrimary from "./HeadingPrimary";

function Hero() {
  return (
    <section className="mob:px-5 flex h-screen flex-col items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat px-10 text-center">
      <HeadingPrimary>
        Sip and savor the taste of a perfect coffee
      </HeadingPrimary>
      <p className="mb-6 text-xl font-medium text-white">
        Discover the art of culinary delight in every visit.
      </p>
      <Button type="primary" to="/reservation/new">
        Reserve
      </Button>
    </section>
  );
}

export default Hero;
