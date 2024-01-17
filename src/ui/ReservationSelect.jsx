import { PiWarning } from "react-icons/pi";

function ReservationSelect({
  label,
  name,
  value,
  onChange,
  children,
  formIsTouched,
}) {
  return (
    <div className="flex items-center justify-center mobsm:flex-col mobsm:gap-1">
      <p className="w-1/4 text-left capitalize mobsm:text-center">{label}:</p>
      <div className="flex items-center gap-3 mob:gap-1 mobsm:flex-col">
        <select
          className={`w-72 cursor-pointer rounded-full py-2.5 text-center shadow-menu-inputs focus:outline focus:outline-2 focus:outline-commontext tablg:w-56 mob:w-52 mob:py-2 mobsm:w-full ${
            formIsTouched && !value
              ? "bg-red-100 text-red-700 child:bg-white child:text-commontext"
              : ""
          }`}
          name={name}
          required
          onChange={onChange}
          value={value}
        >
          {children}
        </select>
        <span
          className={`${
            formIsTouched && !value
              ? "text-3xl text-red-700"
              : "opacity-0 mobsm:hidden"
          }`}
        >
          <PiWarning />
        </span>
      </div>
    </div>
  );
}

export default ReservationSelect;
