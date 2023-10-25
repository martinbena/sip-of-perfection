import Button from "./Button";

function Hero() {
  return (
    <section className="bg-hero-pattern flex h-screen flex-col items-center justify-center gap-8  bg-cover bg-center text-center">
      <h1 className="mx-auto max-w-3xl font-heading text-5xl font-bold leading-tight text-white">
        Sip and savor the taste of a perfect coffee
      </h1>
      <Button to="/reservation/new">Reserve</Button>
    </section>
  );
}

export default Hero;
