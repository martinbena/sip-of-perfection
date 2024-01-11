function ReservationInput({ type, label, name, placeholder, error }) {
  if (type === "textarea")
    return (
      <div className="flex flex-col gap-5">
        <label htmlFor={name}>{label}:</label>
        <textarea
          className="p-2 text-inherit"
          name={name}
          id={name}
          placeholder={placeholder}
          cols="50"
          rows="4"
        ></textarea>
      </div>
    );

  return (
    <div>
      <div className="flex items-center">
        <label className="w-24" htmlFor={name}>
          {label}:
        </label>
        <input
          className="w-72  px-4 py-2 text-inherit shadow-menu-inputs focus:outline-commontext"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required
        />
      </div>
      {error && (
        <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default ReservationInput;
