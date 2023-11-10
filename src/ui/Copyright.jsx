import { Link } from "react-router-dom";

function Copyright() {
  return (
    <p className="text-sm">
      &copy; Copyright 2023 by{" "}
      <Link className="border-b-2 border-accent hover:text-accent" to="/">
        Martin Beňa
      </Link>
      . All rights reserved.
    </p>
  );
}

export default Copyright;
