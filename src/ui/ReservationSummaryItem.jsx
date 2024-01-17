function ReservationSummaryItem({ icon, children }) {
  return (
    <p className="flex items-center gap-6 mobsm:gap-4">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand child:h-10 child:w-10 mobsm:h-12 mobsm:w-12 mobsm:child:h-8 mobsm:child:w-8">
        {icon}
      </span>
      <span className="font-medium mobsm:text-sm">{children}</span>
    </p>
  );
}

export default ReservationSummaryItem;
