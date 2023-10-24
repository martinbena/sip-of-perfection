import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <ul className="flex gap-12 text-lg font-medium">
        <li>
          <NavLink to="/menu">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Reservation</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
