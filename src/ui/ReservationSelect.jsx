function ReservationSelect({ label, name, value, onChange, children }) {
  return (
    <div className="flex items-center justify-center mobsm:flex-col mobsm:gap-1">
      <p className="w-1/4 text-left capitalize mobsm:text-center">{label}:</p>
      <select
        className="w-72 cursor-pointer rounded-full py-2.5 text-center shadow-menu-inputs focus:outline focus:outline-2 focus:outline-commontext mob:w-56 mob:py-2 mobsm:w-full"
        name={name}
        required
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
}

export default ReservationSelect;
