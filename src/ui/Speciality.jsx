import Button from "./Button";

function Speciality({ title, image, description, isReversed }) {
  const gridClasses = isReversed ? "" : "-order-1";

  return (
    <div className="flex items-center justify-between">
      <img className="rounded-speciality h-80 w-56" src={image} alt={title} />
      <div className={`${gridClasses} max-w-sixty`}>
        <h3 className="mb-8 font-heading text-2xl capitalize">{title}</h3>
        <p className="mb-6">{description}</p>
        <Button type="primary" to="/reservation/new">
          Preorder
        </Button>
      </div>
    </div>
  );
}

export default Speciality;
