import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Logo of the cafe"
        className="inline-block h-32 w-32"
      />
    </Link>
  );
}

export default Logo;
