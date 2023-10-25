import Button from "./Button";

function Hero() {
  return (
    <section className="bg-hero-pattern flex h-screen flex-col items-center justify-center  bg-cover bg-center text-center">
      <h1 className="mx-auto mb-12 max-w-3xl font-heading text-5xl font-bold leading-tight text-white">
        Sip and savor the taste of a perfect coffee
      </h1>
      <p className="mb-6 text-xl font-medium text-white">
        Discover the art of culinary delight in every visit.
      </p>
      <Button to="/reservation/new">Reserve</Button>
    </section>
  );
}

export default Hero;
