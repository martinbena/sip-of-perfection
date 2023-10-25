import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link
      to={to}
      className="hover:bg-accentshadelight rounded-lg bg-accent px-10 py-1.5 text-xl font-semibold text-btntext"
    >
      {children}
    </Link>
  );
}

export default Button;
