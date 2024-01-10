function ReservationSelect({ name, value, onChange, children }) {
  return (
    <div className="flex">
      <p className="w-1/5 capitalize">{name}:</p>
      <select name={name} required onChange={onChange} value={value}>
        {children}
      </select>
    </div>
  );
}

export default ReservationSelect;
