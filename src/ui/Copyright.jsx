import { Link } from "react-router-dom";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-sm">
      &copy; Copyright {currentYear} by{" "}
      <Link className="border-b-2 border-accent hover:text-accent" to="/">
        Martin Beňa
      </Link>
      . All rights reserved.
    </p>
  );
}

export default Copyright;
