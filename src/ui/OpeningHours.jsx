import Button from "./Button";

function OpeningHours() {
  return (
    <section className="bg-opening-hours bg-cover bg-fixed bg-center bg-no-repeat py-32 text-center text-white">
      <h2 className="mb-16 font-heading text-5xl font-bold leading-tight">
        <span className="border-b-2 pb-2">Open every day</span>
      </h2>
      <article className="mb-8 space-y-3 text-xl font-semibold">
        <p>Monday &ndash; Friday: 9 AM &ndash; 9 PM</p>
        <p>Saturday &ndash; Sunday: 8 AM &ndash; 11 PM</p>
      </article>
      <Button type="primary" to="/reservation/new">
        Reserve
      </Button>
    </section>
  );
}

export default OpeningHours;
