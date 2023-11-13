import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="absolute left-0 top-0 flex hidden w-full items-center justify-between px-16 py-6 font-medium">
      <Logo />
      <ul className="flex gap-16 text-lg font-medium text-white child-hover:text-linkhover">
        <li className="">
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/reservation/new">Reservation</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
