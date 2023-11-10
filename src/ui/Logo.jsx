import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo({ type }) {
  if (type === "footer")
    return (
      <Link to="/">
        <img src={logo} alt="Logo of the cafe" className="h-40 w-40" />
      </Link>
    );

  return (
    <div className="flex items-center gap-4">
      <Link to="/">
        <img
          src={logo}
          alt="Logo of the cafe"
          className="inline-block h-16 w-16"
        />
      </Link>
      <Link to="/" className="font-heading text-2xl text-white">
        Sip of Perfection
      </Link>
    </div>
  );
}

export default Logo;
