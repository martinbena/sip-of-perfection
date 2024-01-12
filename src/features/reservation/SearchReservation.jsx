import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Searchbar from "../../ui/Searchbar";

function SearchReservation() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/reservation/${query}`);
    setQuery("");
  }

  return (
    <div className="mx-auto max-w-8xl px-16 mob:px-2">
      <form className="child:ml-auto mob:child:mx-auto" onSubmit={handleSubmit}>
        <Searchbar
          placeholder="Search reservation ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchReservation;
