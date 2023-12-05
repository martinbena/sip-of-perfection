import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";

function UpdateReservation({ reservation }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <button>haha</button>
    </fetcher.Form>
  );
}

export default UpdateReservation;

export async function action({ request, params }) {
  return null;
}
