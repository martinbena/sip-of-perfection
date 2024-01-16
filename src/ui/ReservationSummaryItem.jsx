function ReservationSummaryItem({ icon, children }) {
  return (
    <p className="flex items-center gap-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand child:h-10 child:w-10">
        {icon}
      </span>
      <span className="font-medium">{children}</span>
    </p>
  );
}

export default ReservationSummaryItem;
