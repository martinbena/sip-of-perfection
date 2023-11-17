import { HiMenu, HiOutlineX } from "react-icons/hi";

function NavigationButton({ onToggle, isOpen }) {
  return (
    <button
      className="z-50 hidden text-white hover:text-linkhover child:h-12 child:w-12 tab:block"
      onClick={onToggle}
      aria-label={isOpen ? "Close the navigation" : "Open the navigation"}
    >
      {isOpen ? <HiOutlineX /> : <HiMenu />}
    </button>
  );
}

export default NavigationButton;
