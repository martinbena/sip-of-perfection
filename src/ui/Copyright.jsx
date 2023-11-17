import { Link } from "react-router-dom";

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <p className="text-sm">
      &copy; Copyright {currentYear} by{" "}
      <Link
        className="border-b-2 border-accent hover:text-accent"
        to="/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check the website of the creator Martin Bena"
      >
        Martin Beňa
      </Link>
      . All rights reserved.
    </p>
  );
}

export default Copyright;
