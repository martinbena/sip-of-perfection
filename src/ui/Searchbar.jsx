import { useRef } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

function Searchbar({ placeholder, value, onChange }) {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current && inputRef.current.focus();
  }
  return (
    <div
      onClick={focusInput}
      className="searchbar flex w-96 items-center gap-8 rounded-full bg-white px-6 py-3 shadow-menu-inputs focus-within:outline focus-within:outline-2 focus-within:outline-commontext mob:py-1.5 mobsm:w-full"
    >
      <GiMagnifyingGlass className="h-8 w-8" />
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className="w-full focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Searchbar;
