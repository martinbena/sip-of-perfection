import DateTimeCheck from "../features/reservation/DateTimeCheck";
import GuestData from "../features/reservation/GuestData";

function FormContainer() {  
  return (
    <div className="mx-auto max-w-8xl">
      <div className="from-commontexttintdark shadow-reservation mx-16 overflow-hidden rounded-xl bg-gradient-to-br to-commontext p-16 pt-12 dtsm:mx-4 dtsm:p-12 mob:mx-2 mob:p-8 mobsm:p-4">
        <DateTimeCheck />
        <GuestData />
      </div>
    </div>
  );
}

export default FormContainer;
