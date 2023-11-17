import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import NavigationButton from "./NavigationButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleTabKey = (e) => {
      const focusableElements = navRef.current.querySelectorAll("a, button");
      const firstElement = focusableElements[2];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        e.key === "Tab" &&
        e.shiftKey &&
        document.activeElement === firstElement
      ) {
        e.preventDefault();
        lastElement.focus();
      }

      if (
        e.key === "Tab" &&
        !e.shiftKey &&
        document.activeElement === lastElement
      ) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    const handleEscapeKey = (e) => {
      e.key === "Escape" && setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleTabKey);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen((open) => !open);

  const handleClose = () => isOpen && setIsOpen(false);

  return (
    <div
      ref={navRef}
      className={`left-0  right-0 top-0 z-30 mx-auto flex max-w-9xl items-center justify-between px-16 py-6 font-medium tablg:px-8 ${
        isOpen ? "fixed" : "absolute"
      }`}
    >
      <Logo />
      <Navigation isOpen={isOpen} onClose={handleClose} />
      <NavigationButton isOpen={isOpen} onToggle={handleToggle} />
    </div>
  );
}

export default Navbar;
