import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="fixed flex w-screen items-center justify-between px-12">
      <Logo />
      <ul className="child-hover:text-linkhover flex gap-12 text-lg font-medium text-white">
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
