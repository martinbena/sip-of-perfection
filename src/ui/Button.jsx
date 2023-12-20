import { Link } from "react-router-dom";

const rarr = "\u2192";

function Button({ children, to, type, onClick }) {
  const classes =
    "rounded-md font-semibold focus:outline-none focus:ring focus:ring-offset-2";
  const styles = {
    primary:
      classes +
      " px-10 py-1.5 text-xl hover:bg-accentshadelight bg-accent text-btntext focus:ring-accentshadelight focus:bg-accentshadelight",
    secondary:
      classes +
      " px-10 py-1.5 text-xl hover:bg-accentshadedark focus:text-white focus:bg-accentshadedark focus:ring-accentshadedark text-accentshadedark border-accentshadedark border-2 transition-all duration-300 ease-out hover:text-white",
    tertiary:
      classes +
      " px-5 py-1.5 hover:bg-accentshadelight bg-accent text-sm text-btntext focus:ring-accentshadelight focus:bg-accentshadelight",
    "tertiary-warn":
      classes +
      " px-5 py-1.5 hover:bg-amber-600 bg-amber-500 text-sm text-btntext focus:ring-amber-600 focus:bg-amber-600",
    round:
      "rounded-full flex items-center justify-center p-4 h-4 w-4 text-xl bg-accent font-semibold focus:ring-accentshadelight focus:outline-none focus:ring focus:ring-offset-2 mob:p-3.5",
  };

  if (onClick)
    return (
      <button type="button" onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={styles[type]}>
      {type === "secondary" ? `${children} ${rarr}` : children}
    </Link>
  );
}

export default Button;
