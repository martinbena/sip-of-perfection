import { Link } from "react-router-dom";

const rarr = "\u2192";

function Button({ children, to, type }) {
  const classes =
    "rounded-md px-10 py-1.5 text-xl font-semibold focus:outline-none focus:ring focus:ring-offset-2";
  const styles = {
    primary:
      classes +
      " hover:bg-accentshadelight bg-accent text-btntext focus:ring-accentshadelight focus:bg-accentshadelight",
    secondary:
      classes +
      " hover:bg-accentshadedark focus:text-white focus:bg-accentshadedark focus:ring-accentshadedark text-accentshadedark border-accentshadedark border-2 transition-all duration-300 ease-out  hover:text-white",
  };
  return (
    <Link to={to} className={styles[type]}>
      {type === "secondary" ? `${children} ${rarr}` : children}
    </Link>
  );
}

export default Button;
