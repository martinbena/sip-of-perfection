import { Link } from "react-router-dom";

const rarr = "\u2192";

function Button({ children, to, type }) {
  const classes = "rounded-md px-10 py-1.5 text-xl font-semibold";
  const styles = {
    primary: classes + " hover:bg-accentshadelight bg-accent text-btntext",
    secondary:
      classes +
      " hover:bg-accentshadedark text-accentshadedark border-accentshadedark border-2 transition-all duration-300 ease-out  hover:text-white",
  };
  // if (type === "primary")
  //   return (
  //     <Link
  //       to={to}
  //       className="hover:bg-accentshadelight rounded-md bg-accent px-10 py-1.5 text-xl font-semibold text-btntext"
  //     >
  //       {children}
  //     </Link>
  //   );

  // if (type === "secondary")
  //   return (
  //     <Link
  //       to={to}
  //       className="hover:bg-accentshadedark text-accentshadedark border-accentshadedark rounded-md border-2 px-10 py-1.5 text-xl font-semibold transition-all duration-300 ease-out  hover:text-white"
  //     >
  //       {children} {rarr}
  //     </Link>
  //   );
  return (
    <Link to={to} className={styles[type]}>
      {type === "secondary" ? `${children} ${rarr}` : children}
    </Link>
  );
}

export default Button;
