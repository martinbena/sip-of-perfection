function ReservationInput({ type, label, name, placeholder, error }) {
  const classes =
    "text-inherit rounded-sm shadow-menu-inputs focus:outline-none focus:ring-2 focus:ring-commontext focus:ring-offset-4 focus:ring-offset-brandtint";

  if (type === "textarea")
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}:</label>
        <textarea
          className={`p-2 tablg:w-5/6 tab:w-full ${classes}`}
          name={name}
          id={name}
          placeholder={placeholder}
          cols="50"
          rows="3"
        ></textarea>
      </div>
    );

  return (
    <div>
      <div className="flex items-center mob:flex-col mob:gap-2">
        <label
          className="w-32 after:ml-0.5 after:text-red-500 after:content-['*'] moblg:w-24"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className={`w-72 px-4 mobsm:w-full py-2${classes}`}
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
