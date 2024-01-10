function ReservationSelect({ label, name, value, onChange, children }) {
  return (
    <div className="flex">
      <p className="w-1/5 capitalize">{label}:</p>
      <select name={name} required onChange={onChange} value={value}>
        {children}
      </select>
    </div>
  );
}

export default ReservationSelect;
