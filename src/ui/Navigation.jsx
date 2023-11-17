import NavigationLink from "./NavigationLink";

function Navigation({ onClose, isOpen }) {
  return (
    <nav
      onClick={onClose}
      className={`transition-all duration-500 ease-in tab:fixed tab:left-0 tab:right-0 tab:top-0 tab:flex tab:h-screen tab:w-full tab:flex-col tab:items-center tab:justify-center ${
        isOpen
          ? "tab:bg-mobile-nav tab:backdrop-blur-sm"
          : "tab:pointer-events-none tab:invisible tab:translate-x-full tab:opacity-0"
      }`}
    >
      <ul className="flex gap-16 text-lg font-medium text-white tab:flex-col tab:text-center tab:text-3xl">
        <NavigationLink to="/">About Us</NavigationLink>
        <NavigationLink to="/menu">Menu</NavigationLink>
        <NavigationLink to="/contact">Contact Us</NavigationLink>
        <NavigationLink to="/reservation/new">Reservation</NavigationLink>
      </ul>
    </nav>
  );
}

export default Navigation;
