import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`max-w-9xl  left-0 right-0 top-0 mx-auto flex items-center justify-between px-16 py-6 font-medium tablg:px-8 ${
        isOpen ? "fixed" : "absolute"
      }`}
    >
      <Logo />
      <nav
        className={`transition-all duration-500 ease-in tab:fixed tab:left-0 tab:right-0 tab:top-0 tab:flex tab:h-screen tab:w-full tab:flex-col tab:items-center tab:justify-center ${
          isOpen
            ? "bg-mobile-nav backdrop-blur"
            : "tab:pointer-events-none tab:invisible tab:translate-x-full tab:opacity-0"
        }`}
      >
        <ul
          className={`flex gap-16 font-medium text-white child-hover:text-linkhover ${
            isOpen ? "flex-col text-center text-3xl" : "text-lg"
          }`}
        >
          <li>
            <NavLink className="pb-0.5" to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="pb-0.5" to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="pb-0.5" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink className="pb-0.5" to="/reservation/new">
              Reservation
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="z-50 hidden text-white hover:text-linkhover child:h-12 child:w-12 tab:block"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <HiOutlineX /> : <HiMenu />}
      </button>
    </div>
  );
}

export default Navbar;
