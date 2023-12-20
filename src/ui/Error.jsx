import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-brandshade text-center mob:px-4">
      <h1 className="mb-2 font-heading text-2xl">Something went wrong</h1>
      <p className="mb-4">{error.data || error.message}</p>

      <Button type="secondary" onClick={() => navigate(-1)}>
        &larr; Go back
      </Button>
    </div>
  );
}

export default Error;
