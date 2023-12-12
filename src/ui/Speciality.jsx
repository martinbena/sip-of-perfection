import Button from "./Button";
import HeadingTertiary from "./HeadingTertiary";

function Speciality({ title, image, description, isReversed }) {
  const gridClasses = isReversed ? "" : "-order-1 moblg:order-1";

  return (
    <div className="flex items-center justify-between tab:gap-10 moblg:flex-col moblg:gap-12 moblg:text-center">
      <img className="h-80 w-56 rounded-speciality" src={image} alt={title} />
      <div className={`${gridClasses} max-w-sixty moblg:max-w-full`}>
        <HeadingTertiary>{title}</HeadingTertiary>
        <p className="mb-6 mt-8">{description}</p>
        <Button type="primary" to="/reservation/new">
          Pre-order
        </Button>
      </div>
    </div>
  );
}

export default Speciality;
