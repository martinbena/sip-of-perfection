import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Logo of the cafe"
          className="inline-block h-24 w-24"
        />
      </Link>
      <Link to="/" className="font-heading text-2xl text-white">
        Sip of Perfection
      </Link>
    </div>
  );
}

export default Logo;
