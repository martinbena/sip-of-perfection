function ReservationStatus({ type, status, icon, classes }) {
  return (
    <div
      className={`${classes} flex items-center gap-2 rounded-md px-4 py-2 font-semibold ${
        type === "danger"
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      } ${
        status ? "opacity-100" : "invisible h-0 w-0 translate-x-full opacity-0"
      }`}
    >
      <span className="child:h-6 child:w-6">{icon}</span>
      <p>{status}</p>
    </div>
  );
}

export default ReservationStatus;
