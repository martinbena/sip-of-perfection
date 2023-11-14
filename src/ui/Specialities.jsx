import Button from "./Button";
import HeadingSecondary from "./HeadingSecondary";
import Speciality from "./Speciality";

const specs = [
  {
    title: "Java bliss coffee coctail",
    description:
      "Indulge in our signature Java Bliss Coffee Cocktail, a harmonious blend of premium coffee, a touch of liqueur, and silky cream. This delightful creation is a true testament to the artistry of coffee mixology, delivering a rich and invigorating experience with every sip.",
    image: "/src/assets/java-coffee-coctail.jpg",
  },
  {
    title: "Decadent chocolate cake",
    description:
      "Treat yourself to pure indulgence with our Decadent Chocolate Cake. Crafted with the finest cocoa and love, this moist and luscious cake is a chocolate lover's dream come true. Savor the velvety layers and rich flavor that will leave your taste buds craving for more.",
    image: "/src/assets/chocolate-cake.jpg",
  },
];

function Specialities() {
  return (
    <section className="bg-specs-pattern bg-specs bg-no-repeat py-24">
      <article className="mx-auto max-w-6xl px-12 tablg:px-8">
        <div className="mb-20 text-center">
          <HeadingSecondary>Our specialities</HeadingSecondary>
        </div>
        <div className="space-y-20">
          {specs.map((spec, i) => (
            <Speciality
              title={spec.title}
              image={spec.image}
              description={spec.description}
              key={spec.title}
              isReversed={(i + 1) % 2}
            />
          ))}
        </div>
        <div className="mt-24 text-center">
          <Button type="secondary" to="/menu">
            See menu
          </Button>
        </div>
      </article>
    </section>
  );
}

export default Specialities;

// mob: { max: "544px" },
//         moblg: { max: "704px" },
//         tab: { max: "944px" },
//         tablg: { max: "1200px" },
//         dtsm: { max: "1344px" },