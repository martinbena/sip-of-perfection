import { useRef } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

function Searchbar({ placeholder, value, onChange, inputIsInvalid }) {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current && inputRef.current.focus();
  }
  return (
    <div
      onClick={focusInput}
      className={`flex w-96 items-center gap-8 rounded-full  px-6 py-3 shadow-menu-inputs  mob:py-1.5 mobsm:w-full ${
        inputIsInvalid
          ? "bg-red-100 outline outline-2 outline-red-700"
          : "bg-white focus-within:outline focus-within:outline-2 focus-within:outline-commontext"
      }`}
    >
      <GiMagnifyingGlass className="h-8 w-8" />
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={`w-full focus:outline-none ${
          inputIsInvalid ? "bg-red-100 text-red-700" : ""
        }`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Searchbar;
